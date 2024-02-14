import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  UseInterceptors,
} from "@nestjs/common";
import {
  ForgotPasswordDto,
  LoginDto,
  ResetPasswordDto,
  ChangePasswordDto,
  VerifyEmailDto,
  GetAllCompanyDto,
  CompanySignupDto,
} from "./dto/auth.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { v4 as uuidv4 } from "uuid";
import * as crypto from "crypto";
import { PasswordService } from "./password.service";
import { MailService } from "../mail/mail.service";
import { ResponseInterceptor } from "../filter/responseFilter/respone.service";
import { AuthResolver } from "./authFinder.service";
import { CompanyUser } from "src/types/appModel.type";

@UseInterceptors(ResponseInterceptor)
@Injectable()
export class CompanyAuthService {
  private readonly timeGenerated: string;
  constructor(
    private prisma: PrismaService,
    private readonly passwordService: PasswordService,
    private readonly mailService: MailService,
    private readonly authResolver: AuthResolver,
  ) {
    this.timeGenerated = new Date().toISOString();
  }

  async companyGettingStarted(dto: CompanySignupDto) {
    const {
      companyName,
      address,
      email,
      password,
      companyDescription,
      addressCity,
      addressState,
      industry,
      website,
      termsConditions,
    } = dto;

    const foundCompany = (await this.authResolver.findUserWithField(
      email,
      "email",
      "companyUser",
    )) as CompanyUser;

    if (foundCompany) {
      throw new BadRequestException("Email is already taken");
    }

    const code = crypto.randomInt(1000, 9999).toString();
    const hashedPassword = await this.passwordService.hashPassword(password);

    const newCreatedEntity = await this.prisma.companyUser.create({
      data: {
        id: uuidv4(),
        email: dto.email,
        created_at: this.timeGenerated,
        password: hashedPassword,
        status: "pending",
        isEmailVerified: false,
        verificationCode: code,
        address: address,
        addressCity: addressCity,
        addressState: addressState,
        companyName: companyName,
        companyDescription: companyDescription,
        industry: industry,
        website: website,
        termsConditions: termsConditions,
        role: "admin",
      },
    });

    if (newCreatedEntity) {
      await this.mailService.userSignUp({
        to: email,
        data: {
          name: companyName,
          code: code.toString(),
        },
      });

      return {
        message: `Account successfully created. Check email for verification code`,
      };
    }
  }

  async verifyAccount(dto: VerifyEmailDto) {
    const { code } = dto;

    const foundCompanyWithCode = await this.authResolver.findUserWithField(
      code,
      "verificationCode",
      "companyUser",
    );

    if (foundCompanyWithCode === null) {
      throw new BadRequestException("Code not found");
    }

    const data = {
      isEmailVerified: true,
      verificationCode: null,
      status: "active",
      isActive: true,
      updated_at: this.timeGenerated,
    };

    const updatedCompany = (await this.authResolver.findAndUpdateField(
      data,
      "companyUser",
      "verificationCode",
      code,
    )) as CompanyUser;

    if (!updatedCompany) {
      throw new BadRequestException("Failed to update user");
    }

    if (updatedCompany.isEmailVerified === true) {
      return {
        meassage: "Email verification success",
      };
    }
  }

  async changePassword(id: string, dto: ChangePasswordDto) {
    const { current_password, new_password } = dto;

    const foundCompany = await this.authResolver.findUserWithField(
      id,
      "id",
      "companyUser",
    );

    if (!foundCompany) {
      throw new BadRequestException("User not found");
    } else if (foundCompany) {
      // check if the code matches
      const isMatch = await this.passwordService.validatePassword(
        current_password,
        foundCompany?.password,
      );

      if (!isMatch) {
        throw new BadRequestException("Current password is incorrect");
      }
      // if the match is true, the password will be updated
      if (isMatch) {
        const hashedPassword =
          await this.passwordService.hashPassword(new_password);

        const data = {
          password: hashedPassword,
          passwordResetCode: null,
          updated_at: this.timeGenerated,
        };

        const updatedUser = await this.authResolver.findAndUpdateField(
          data,
          "user",
          "id",
          foundCompany.id,
        );

        if (updatedUser === null) {
          throw new BadRequestException("Failed to update user password");
        }

        return {
          message: "Your password has been successfully reset",
        };
      }
    }
  }

  async login(dto: LoginDto) {
    const { email, password } = dto;

    const foundCompany = (await this.authResolver.findUserWithField(
      email,
      "email",
      "companyUser",
    )) as CompanyUser;

    if (!foundCompany) {
      throw new BadRequestException("Wrong email credential");
    }

    const isMatch = this.passwordService.validatePassword(
      password,
      foundCompany.password,
    );

    if (!isMatch) {
      throw new BadRequestException("Wrong password inputed");
    }

    const payload = {
      id: foundCompany.id,
      email: foundCompany.email,
      status: foundCompany.status,
      created_at: foundCompany.created_at,
      isActive: foundCompany.isActive,
      lastLogin: this.timeGenerated,
      isEmailVerified: foundCompany.isEmailVerified,
      updated_at: foundCompany.updated_at,
      role: foundCompany.role,
    } as Partial<CompanyUser>;

    const allToken = this.passwordService.generateTokens(payload);

    const data = {
      lastLogin: this.timeGenerated,
    };

    if (allToken) {
      await this.authResolver.findAndUpdateField(
        data,
        "companyUser",
        "email",
        foundCompany.email,
      );

      return {
        message: "You have login successfully",
        data: {
          ...allToken,
        },
      };
    }
  }

  async forgotPassword(dto: ForgotPasswordDto) {
    const { email } = dto;
    try {
      const codeGenerated = crypto.randomInt(100000, 999999).toString();

      // const hashedCode = await this.passwordService.hashPassword(
      //   codeGenerated.toString(),
      // );

      const data = {
        passwordResetCode: codeGenerated,
      };

      const foundCompanyChecked = (await this.authResolver.findUserWithField(
        email,
        "email",
        "companyUser",
      )) as CompanyUser;

      const updatedCompany = (await this.authResolver.findAndUpdateField(
        data,
        "companyUser",
        "email",
        email,
      )) as CompanyUser;

      if (!updatedCompany) {
        throw new BadRequestException("Failed to send forgot code");
      }

      await this.mailService.forgotPassword({
        to: foundCompanyChecked.email,
        data: {
          name: foundCompanyChecked.companyName,
          code: codeGenerated,
        },
      });

      return {
        message: "Verication code sent",
        data: {
          code: codeGenerated,
        },
      };
    } catch (err) {
      throw new InternalServerErrorException("Internal server error");
    }
  }

  async resetPassword(dto: ResetPasswordDto) {
    const { code, new_password } = dto;

    const foundCompanny = await this.authResolver.findUserWithField(
      code,
      "passwordResetCode",
      "companyUser",
    );

    if (!foundCompanny) {
      throw new BadRequestException("Invalid code");
    }

    const hashedPassword =
      await this.passwordService.hashPassword(new_password);

    const data = {
      password: hashedPassword,
      passwordResetCode: null,
      updated_at: this.timeGenerated,
    };

    const updatedCompany = await this.authResolver.findAndUpdateField(
      data,
      "companyUser",
      "id",
      foundCompanny.id,
    );

    if (!updatedCompany) {
      throw new BadRequestException("Failed to update company password");
    }

    return {
      message: "Your password has been successfully reset",
    };
  }

  async activateCompany(id: string) {
    const data = {
      isActive: true,
      updated_at: this.timeGenerated,
    };

    const activatedCompany = (await this.authResolver.findAndUpdateField(
      data,
      "companyUser",
      "id",
      id,
    )) as CompanyUser;

    if (!activatedCompany) {
      throw new BadRequestException("Failed to  activate  company");
    }

    if (activatedCompany) {
      await this.mailService.activateVariousUsers({
        to: activatedCompany.email,
        data: {
          name: activatedCompany.companyName,
        },
      });
    }

    return {
      message: "Company activated successfully",
    };
  }

  async deactivateCompany(id: string) {
    const data = {
      isActive: false,
      updated_at: this.timeGenerated,
    };

    const deactivatedUser = (await this.authResolver.findAndUpdateField(
      data,
      "companyUser",
      "id",
      id,
    )) as CompanyUser;

    if (!deactivatedUser) {
      throw new BadRequestException("Failed to deactivate company");
    }

    if (deactivatedUser) {
      await this.mailService.deactiveVariousUsers({
        to: deactivatedUser.email,
        data: {
          name: deactivatedUser.companyName,
        },
      });

      return {
        message: "Company deactivated successfully",
      };
    }
  }

  async getCompanyById(id: string) {
    const company = await this.prisma.companyUser.findUnique({
      where: { id },
      select: {
        id: true,
        created_at: true,
        lastLogin: true,
        phoneNumber: true,
        status: true,
        email: true,
        updated_at: true,
        isActive: true,
        companyName: true,
        address: true,
        addressCity: true,
        addressState: true,
        industry: true,
        website: true,
        passportImg: true,
        companyDescription: true,
        company_circle: {
          select: {
            id: true,
            created_at: true,
            activityLevel: true,
            circleImg: true,
            coyCircleName: true,
            coyCircleStatus: true,
            coyCircleNos: true,
            coyCircleDescription: true,
            memberList: {
              select: {
                id: true,
                email: true,
                passportImg: true,
                ageRange: true,
                gender: true,
                department: true,
                phoneNumber: true,
                jobRole: true,
                status: true,
              },
            },
          },
          orderBy: { created_at: "desc" },
        },
      },
    });

    if (!company) {
      throw new BadRequestException("Company not found");
    }

    return {
      message: "Company fetched successfully",
      data: company,
    };
  }

  async getAllCompanies(dto: GetAllCompanyDto) {
    const {
      created_at,
      page = 1,
      limit = 10,
      id,
      search,
      status,
      phoneNumber,
      accountStatus,
    } = dto;

    try {
      const limitNumber = Number(limit);
      const skip = ((page as number) - 1) * limitNumber;
      const offset = limitNumber;

      const where: { [key: string]: any } = {};

      if (id) {
        where.id = { contains: id, mode: "insensitive" };
      }

      if (status) {
        where.status = status;
      }

      if (created_at) {
        where.created_at = {
          gte: new Date(created_at).toISOString(),
        };
      }

      if (phoneNumber) {
        where.phoneNumber = {
          contains: phoneNumber,
        };
      }

      if (accountStatus) {
        where.account_status = accountStatus;
      }

      if (search) {
        where.OR = [
          {
            companyName: search.toString(),
          },

          {
            phoneNumber: search.toString(),
          },
          {
            accountStatus: search.toString(),
          },
          { id: { contains: search.toString(), mode: "insensitive" } },
          // Add more fields as needed
        ];
      }

      const [allCompanies, totalCount] = await Promise.all([
        this.prisma.companyUser.findMany({
          where,
          select: {
            id: true,
            created_at: true,
            lastLogin: true,
            phoneNumber: true,
            status: true,
            email: true,
            updated_at: true,
            isActive: true,
            companyName: true,
            address: true,
            addressCity: true,
            addressState: true,
            industry: true,
            website: true,
            passportImg: true,
            companyDescription: true,
            company_circle: {
              select: {
                id: true,
                created_at: true,
                activityLevel: true,
                circleImg: true,
                coyCircleName: true,
                coyCircleStatus: true,
                coyCircleNos: true,
                coyCircleDescription: true,
                memberList: {
                  select: {
                    id: true,
                    email: true,
                    passportImg: true,
                    ageRange: true,
                    gender: true,
                    department: true,
                    phoneNumber: true,
                    jobRole: true,
                    status: true,
                  },
                },
              },
              orderBy: { created_at: "desc" },
            },
          },
          orderBy: { created_at: "desc" },
          skip,
          take: offset as number,
        }),
        this.prisma.companyUser.count({
          where,
        }),
      ]);

      const totalPages = Math.ceil(totalCount / limitNumber);

      const message = allCompanies.length
        ? "Companies fetched successfully"
        : "No Companies Found";
      const success = allCompanies?.length ? true : false;

      return {
        message,
        data: {
          total: success ? totalCount : 0,
          total_pages: success ? totalPages : 0,
          current_page: success ? Number(page) : 0,
          page_size: success ? offset : 0,
          comapnies_list: allCompanies,
        },
      };
    } catch (error) {
      console.error("Error in get all companies:", error);
      throw error;
    }
  }

  async deleteCompany(id: string) {
    const company = await this.prisma.companyUser.delete({
      where: {
        id: id,
      },
    });

    if (!company) {
      throw new BadRequestException("Company not found");
    }

    return {
      message: "Company deleted successfully",
    };
  }
}
