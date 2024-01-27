import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  UseInterceptors,
} from "@nestjs/common";
import {
  ForgotPasswordDto,
  LoginDto,
  GettingStartedDto,
  ResetPasswordDto,
  GetAllUserDto,
  ChangePasswordDto,
  VerifyEmailDto,
} from "./dto/auth.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { v4 as uuidv4 } from "uuid";
import * as crypto from "crypto";
import { PasswordService } from "./password.service";
import { MailService } from "../mail/mail.service";
import { ResponseInterceptor } from "../responeFilter/respone.service";
import { UserGender, UserAccount } from "../../prisma/generated/client";
import { AuthResolver } from "./authFinder.service";
import { Users } from "src/types/appUsers.type";

@UseInterceptors(ResponseInterceptor)
@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    private readonly passwordService: PasswordService,
    private readonly mailService: MailService,
    private readonly authResolver: AuthResolver,
  ) {}

  async userGettingStarted(dto: GettingStartedDto) {
    const {
      firstName,
      email,
      password,
      accountType,
      lastName,
      ethnicity,
      maritalStatus,
      department,
      jobRole,
      gender,
    } = dto;

    const foundUser = (await this.authResolver.findUserWithField(
      email,
      "email",
      "user",
    )) as Users;

    if (foundUser) {
      throw new BadRequestException("Email is already taken");
    }

    const code = crypto.randomInt(100000, 999999).toString();
    const hashedPassword = await this.passwordService.hashPassword(password);

    const newCreatedEntity = await this.prisma.user.create({
      data: {
        id: uuidv4(),
        email: dto.email,
        created_at: new Date(),
        password: hashedPassword,
        firstName: firstName,
        lastName: lastName,
        status: "pending",
        isEmailVerified: false,
        verificationCode: code,
        ethnicity: ethnicity,
        jobRole: jobRole,
        maritalStatus: maritalStatus,
        department: department,
        accountType: accountType as string as UserAccount,
        gender: gender as string as UserGender,
      },
    });

    if (newCreatedEntity) {
      await this.mailService.userSignUp({
        to: email,
        data: {
          name: firstName,
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
    };

    const updatedUser = (await this.authResolver.findAndUpdateField(
      data,
      "user",
      "verificationCode",
      code,
    )) as Users;

    console.log(updatedUser.isEmailVerified);

    if (!updatedUser) {
      throw new BadRequestException("Failed to update user");
    }

    if (updatedUser.isEmailVerified === true) {
      return {
        meassage: "Email verification success",
      };
    }
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

    const isMatch = this.passwordService.validatePassword(
      password,
      foundUser.password,
    );

    if (!isMatch) {
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
    } as Partial<Users>;

    const allToken = this.passwordService.generateTokens(payload);

    return {
      message: "You have login successfully",
      data: {
        ...allToken,
      },
    };
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
      "password_resetCode",
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
    const user_time_created = new Date();

    const data = {
      isActive: true,
      updated_at: user_time_created,
    };

    const activatedUser = await this.authResolver.findAndUpdateField(
      data,
      "user",
      "id",
      id,
    );

    if (!activatedUser) {
      throw new BadRequestException("Failed to  activate  user");
    }

    return {
      message: "User activated successfully",
    };
  }

  async deactivateUser(id: string) {
    const user_time_created = new Date();
    const data = {
      isActive: true,
      updated_at: user_time_created,
    };

    const deactivatedUser = (await this.authResolver.findAndUpdateField(
      data,
      "user",
      "id",
      id,
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
      },
    });

    if (!user) {
      throw new BadRequestException("User not found");
    }

    return {
      message: "User fetched successfully",
      data: {
        ...user,
      },
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
      phone_number,
      gender,
      account_status,
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

      if (phone_number) {
        where.phone_number = {
          contains: phone_number,
        };
      }

      if (gender) {
        where.gender = gender;
      }
      if (account_status) {
        where.account_status = account_status;
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
            first_name: search.toString(),
          },
          {
            last_name: search.toString(),
          },
          {
            phone_number: search.toString(),
          },
          {
            account_status: search.toString(),
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
}
