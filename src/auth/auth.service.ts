import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UseInterceptors,
} from "@nestjs/common";
import {
  ForgotPasswordDto,
  LoginDto,
  ResetPasswordDto,
  GetAllUserDto,
  ChangePasswordDto,
  VerifyEmailDto,
  GettingStartedUpdateProfileDto,
  UserGettingStartedDto,
} from "./dto/auth.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { v4 as uuidv4 } from "uuid";
import * as crypto from "crypto";
import { PasswordService } from "./password.service";
import { MailService } from "../mail/mail.service";
import { ResponseInterceptor } from "../filter/responseFilter/respone.service";
import {
  UserGender,
  UserAccount,
  MaitalStatus,
} from "../../prisma/generated/client";
import { AuthResolver } from "./authFinder.service";
import { CompanyUser, Users } from "src/types/appModel.type";

@UseInterceptors(ResponseInterceptor)
@Injectable()
export class AuthService {
  private readonly timeGenerated: string;

  constructor(
    private prisma: PrismaService,
    private readonly passwordService: PasswordService,
    private readonly mailService: MailService,
    private readonly authResolver: AuthResolver,
  ) {
    this.timeGenerated = new Date().toISOString();
  }

  async userGettingStarted(dto: UserGettingStartedDto) {
    const { email, password, termsConditions } = dto;

    const foundUser = (await this.authResolver.findUserWithField(
      email,
      "email",
      "user",
    )) as Users;

    const foundCompany = (await this.authResolver.findUserWithField(
      email,
      "email",
      "companyUser",
    )) as CompanyUser;

    if (foundUser || foundCompany) {
      throw new BadRequestException("Email is already taken");
    }

    const code = crypto.randomInt(1000, 9999).toString();
    const hashedPassword = await this.passwordService.hashPassword(password);

    const newCreatedEntity = await this.prisma.user.create({
      data: {
        id: uuidv4(),
        email: email,
        created_at: this.timeGenerated,
        password: hashedPassword,
        status: "pending",
        isEmailVerified: false,
        verificationCode: code,
        termsConditions: termsConditions,
      },
    });

    if (newCreatedEntity) {
      await this.mailService.userSignUp({
        to: email,
        data: {
          code: code.toString(),
        },
      });

      return {
        message: `Account successfully created. Check email for verification code`,
      };
    }
  }
  async userUpdateProfile(
    id: string,
    dto: GettingStartedUpdateProfileDto,
    file: Express.Multer.File,
  ) {
    if (
      dto.accountType === "" ||
      dto.accountType === undefined ||
      dto.accountType === null
    ) {
      throw new BadRequestException("account type is required");
    }

    let saveData = {} as Partial<Users>;

    if (dto.accountType === "personalUser") {
      saveData = {
        firstName: dto.firstName,
        lastName: dto.lastName,
        gender: dto.gender as string as UserGender,
        address: dto.address,
        passportImg: file.filename,
      };
    } else if (dto.accountType === "clientUser") {
      saveData = {
        firstName: dto.firstName,
        accountType: dto.accountType as string as UserAccount,
        lastName: dto.lastName,
        ethnicity: dto.ethnicity,
        maritalStatus: dto.maritalStatus as string as MaitalStatus,
        department: dto.department,
        jobRole: dto.jobRole,
        gender: dto.gender as string as UserGender,
        address: dto.address,
        DOB: dto.DOB,
        ageRange: dto.ageRange,
        disability: dto.disability,
        passportImg: file.filename,
      };
    }

    const updatedUser = (await this.authResolver.findAndUpdateField(
      saveData,
      "user",
      "id",
      id,
    )) as Users;

    if (updatedUser) {
      return {
        message: "Profile updated successfully",
      };
    }
  }

  async verifyAccount(dto: VerifyEmailDto) {
    const { code } = dto;

    const foundUserWithCode = await this.authResolver.findUserWithField(
      code,
      "verificationCode",
      "user",
    );

    if (foundUserWithCode === null) {
      throw new BadRequestException("Code not found");
    }

    const data = {
      isEmailVerified: true,
      verificationCode: null,
      status: "active",
      isActive: true,
      updated_at: this.timeGenerated,
    };

    const updatedUser = (await this.authResolver.findAndUpdateField(
      data,
      "user",
      "verificationCode",
      code,
    )) as Users;

    if (!updatedUser) {
      throw new BadRequestException("Failed to update user");
    }

    if (updatedUser.isEmailVerified === true) {
      return {
        meassage: "Email verification success",
      };
    }

    return {
      meassage: "Email verification success",
    };
  }

  async changePassword(id: string, dto: ChangePasswordDto) {
    const { current_password, new_password } = dto;

    const foundUser = await this.authResolver.findUserWithField(
      id,
      "id",
      "user",
    );

    if (!foundUser) {
      throw new BadRequestException("User not found");
    } else if (foundUser) {
      // check if the code matches
      const isMatch = await this.passwordService.validatePassword(
        current_password,
        foundUser?.password,
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
          password_resetCode: null,
          updated_at: this.timeGenerated,
        };

        const updatedUser = await this.authResolver.findAndUpdateField(
          data,
          "user",
          "id",
          foundUser.id,
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

    const foundUser = (await this.authResolver.findUserWithField(
      email,
      "email",
      "user",
    )) as Users;

    if (!foundUser) {
      throw new BadRequestException("Wrong email credential");
    }

    if (foundUser.status === "pending") {
      throw new BadRequestException("Please verify your account first");
    }

    if (foundUser.status === "inactive") {
      throw new BadRequestException("Your account has been deactivated");
    }

    const isMatch = await this.passwordService.validatePassword(
      password,
      foundUser.password,
    );

    if (isMatch === false) {
      throw new BadRequestException("Wrong password inputed");
    }

    const payload = {
      accountType: foundUser.accountType,
      id: foundUser.id,
      email: foundUser.email,
      firstName: foundUser.firstName,
      lastName: foundUser.lastName,
      status: foundUser.status,
      created_at: foundUser.created_at,
      gender: foundUser.gender,
      jobRole: foundUser.jobRole,
      department: foundUser.department,
      maritalStatus: foundUser.maritalStatus,
      ethnicity: foundUser.ethnicity,
      lastLogin: this.timeGenerated,
      isEmailVerified: foundUser.isEmailVerified,
      updated_at: foundUser.updated_at,
      isActive: foundUser.isActive,
      role: foundUser.role,
    } as Partial<Users>;

    const allToken = this.passwordService.generateTokens(payload);

    const data = {
      lastLogin: this.timeGenerated,
    };

    if (allToken) {
      await this.authResolver.findAndUpdateField(
        data,
        "user",
        "email",
        foundUser.email,
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
        password_resetCode: codeGenerated,
      };

      const foundUserChecked = (await this.authResolver.findUserWithField(
        email,
        "email",
        "user",
      )) as Users;

      const updatedfoundUser = (await this.authResolver.findAndUpdateField(
        data,
        "user",
        "email",
        email,
      )) as Users;

      if (!updatedfoundUser) {
        throw new BadRequestException("Failed to send forgot code");
      }

      await this.mailService.forgotPassword({
        to: foundUserChecked.email,
        data: {
          name: foundUserChecked.firstName,
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

    const foundUser = await this.authResolver.findUserWithField(
      code,
      "passwordResetCode",
      "user",
    );

    if (!foundUser) {
      throw new BadRequestException("Invalid code");
    }

    const hashedPassword =
      await this.passwordService.hashPassword(new_password);

    const data = {
      password: hashedPassword,
      password_resetCode: null,
      updated_at: this.timeGenerated,
    };

    const updatedUser = await this.authResolver.findAndUpdateField(
      data,
      "user",
      "id",
      foundUser.id,
    );

    if (!updatedUser) {
      throw new BadRequestException("Failed to update user password");
    }

    return {
      message: "Your password has been successfully reset",
    };
  }

  async activateUser(id: string) {
    const data = {
      isActive: true,
      updated_at: this.timeGenerated,
    };

    const activatedUser = (await this.authResolver.findAndUpdateField(
      data,
      "user",
      "id",
      id,
    )) as Users;

    if (!activatedUser) {
      throw new BadRequestException("Failed to  activate  user");
    }

    if (activatedUser) {
      await this.mailService.activateVariousUsers({
        to: activatedUser.email,
        data: {
          name: activatedUser.firstName,
        },
      });
      return {
        message: "User activated successfully",
      };
    }
  }

  async deactivateUser(id: string) {
    const foundUser = await this.authResolver.findUserWithField(
      id,
      "id",
      "user",
    );

    if (!foundUser) {
      throw new BadRequestException("User not found");
    }

    const data = {
      isActive: false,
      updated_at: this.timeGenerated,
    };

    const deactivatedUser = (await this.authResolver.findAndUpdateField(
      data,
      "user",
      "id",
      foundUser?.id,
    )) as Users;

    if (!deactivatedUser) {
      throw new BadRequestException("Failed to deactivate user");
    }

    if (deactivatedUser) {
      await this.mailService.deactiveVariousUsers({
        to: deactivatedUser.email,
        data: {
          name: deactivatedUser.firstName,
        },
      });

      return {
        message: "User deactivated successfully",
      };
    }
  }

  async getUserById(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        created_at: true,
        firstName: true,
        lastLogin: true,
        lastName: true,
        phoneNumber: true,
        status: true,
        email: true,
        updated_at: true,
        isActive: true,
        gender: true,
        address: true,
        userCircles: {
          select: {
            id: true,
            userCircleName: true,
            userCircleStatus: true,
            created_at: true,
            userCircleNos: true,
            activityLevel: true,
            userCircleShareLink: true,
            circleStatus: true,
          },
          orderBy: { created_at: "desc" },
        },
        coyCircleAttachedTo: {
          select: {
            id: true,
            coyCircleName: true,
            coyCircleStatus: true,
            created_at: true,
            coyCircleNos: true,
            activityLevel: true,
            circleStatus: true,
          },
          orderBy: { created_at: "desc" },
        },
        otherUserCirclesIn: {
          select: {
            id: true,
            userCircleName: true,
            userCircleStatus: true,
            created_at: true,
            userCircleNos: true,
            activityLevel: true,
            circleStatus: true,
          },
          orderBy: { created_at: "desc" },
        },
      },
    });

    if (!user) {
      throw new BadRequestException("User not found");
    }

    // const [coyCircleList, userCircleList] = await Promise.all([
    //   this.prisma.companyCircles.findMany({
    //     where: {
    //       memberList: {
    //         some: {
    //           id: user.id,
    //         },
    //       },
    //     },
    //     select: {
    //       id: true,
    //       coyCircleName: true,
    //       coyCircleStatus: true,
    //       created_at: true,
    //       coyCircleNos: true,
    //       activityLevel: true,
    //       coyCircleDescription: true,
    //       coyCircleShareLink: true,
    //     },
    //     orderBy: { created_at: "desc" },
    //   }),
    //   this.prisma.userCircles.findMany({
    //     where: {
    //       memberList: {
    //         some: {
    //           id: user.id,
    //         },
    //       },
    //     },
    //     select: {
    //       id: true,
    //       userCircleName: true,
    //       userCircleStatus: true,
    //       created_at: true,
    //       userCircleNos: true,
    //       activityLevel: true,
    //       userCircleDescription: true,
    //       userCircleShareLink: true,
    //     },
    //     orderBy: { created_at: "desc" },
    //   }),
    // ]);

    const userObject = {
      ...user,
      // coyCircleList,
      // userCircleList,
    };

    return {
      message: "User fetched successfully",
      data: userObject,
    };
  }

  async getAllUsers(dto: GetAllUserDto) {
    const {
      created_at,
      page = 1,
      limit = 10,
      id,
      search,
      status,
      phoneNumber,
      gender,
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

      if (gender) {
        where.gender = gender;
      }
      if (accountStatus) {
        where.accountStatus = accountStatus;
      }

      // Exclude users with the "admin" role
      where.role = {
        not: {
          not: "admin",
        },
      };

      if (search) {
        where.OR = [
          {
            firstName: search.toString(),
          },
          {
            lastName: search.toString(),
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

      const [allUsers, totalCount] = await Promise.all([
        this.prisma.user.findMany({
          where,
          select: {
            id: true,
            created_at: true,
            firstName: true,
            lastLogin: true,
            lastName: true,
            phoneNumber: true,
            status: true,
            email: true,
            updated_at: true,
            isActive: true,
            gender: true,
            address: true,
            userCircles: {
              select: {
                id: true,
                userCircleName: true,
                userCircleStatus: true,
                created_at: true,
                userCircleNos: true,
                activityLevel: true,
                userCircleDescription: true,
                userCircleShareLink: true,
                circleStatus: true,
              },
              orderBy: { created_at: "desc" },
            },
            coyCircleAttachedTo: {
              select: {
                id: true,
                coyCircleName: true,
                coyCircleStatus: true,
                created_at: true,
                coyCircleNos: true,
                activityLevel: true,
                coyCircleDescription: true,
                coyCircleShareLink: true,
                circleStatus: true,
              },
              orderBy: { created_at: "desc" },
            },
          },
          orderBy: { created_at: "desc" },
          skip,
          take: offset as number,
        }),
        this.prisma.user.count({
          where,
        }),
      ]);

      const totalPages = Math.ceil(totalCount / limitNumber);

      const message = allUsers.length
        ? "Users fetched successfully"
        : "No Users Found";
      const success = allUsers?.length ? true : false;

      return {
        message,
        data: {
          total: success ? totalCount : 0,
          total_pages: success ? totalPages : 0,
          current_page: success ? Number(page) : 0,
          page_size: success ? offset : 0,
          users_list: allUsers,
        },
      };
    } catch (error) {
      console.error("Error in get all users:", error);
      throw error;
    }
  }

  async deleteUser(id: string) {
    const findUser = await this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    if (!findUser) {
      throw new NotFoundException("User not found");
    }

    const deletedUser = await this.prisma.user.delete({
      where: {
        id,
      },
    });

    if (!deletedUser) {
      throw new BadRequestException("User not deleted");
    }
    return {
      message: "User deleted successfully",
      data: deletedUser,
    };
  }
}
