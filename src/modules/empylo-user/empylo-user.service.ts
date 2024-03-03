import {
  ChangePasswordDto,
  ForgotPasswordDto,
  ResetPasswordDto,
  VerifyEmailDto,
} from "./../../auth/dto/auth.dto";
import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from "@nestjs/common";
import { GetAllUserDto, LoginDto } from "../../auth/dto/auth.dto";
import { PasswordService } from "../../auth/password.service";
import { MailService } from "../../mail/mail.service";
import { PrismaService } from "src/prisma/prisma.service";
import { AddAdminUSerDto } from "./dto/empylo-user.dto";
import * as crypto from "crypto";
import { v4 as uuidv4 } from "uuid";
import { SystemRole, UserStatus } from "../../../prisma/generated/client";

@Injectable()
export class EmpyloUserService {
  private readonly timeGenerated: string;

  constructor(
    private prisma: PrismaService,
    private readonly passwordService: PasswordService,
    private readonly mailService: MailService,
  ) {
    this.timeGenerated = new Date().toISOString();
  }

  async addAdminUser(dto: AddAdminUSerDto) {
    const { email, permissions, firstName, lastName, role } = dto;

    // Check if super admin already exists
    const superAdminExists = await this.prisma.empyloUser.findFirst({
      where: { role: SystemRole.superAdmin },
    });

    if (superAdminExists) {
      throw new BadRequestException("Super admin already exists");
    }

    const foundUser = await this.prisma.empyloUser.findUnique({
      where: {
        email: email,
      },
    });

    if (foundUser) {
      throw new BadRequestException("Email is already taken");
    }
    const [firstLetterOfFirstName, secondLetterOfFirstName] = firstName;
    const [firstLetterOfLastName, secondLetterOfLastName] = lastName;
    const userID = crypto.randomBytes(3).toString("hex").toLocaleUpperCase();
    const empyloID = `EMP${firstLetterOfFirstName}${secondLetterOfFirstName}${userID}${firstLetterOfLastName}${secondLetterOfLastName}`;

    if (!foundUser) {
      const randomPassword = crypto.randomBytes(6).toString("hex");

      const code = crypto.randomInt(1000, 9999).toString();

      const newCreatedEntity = await this.prisma.empyloUser.create({
        data: {
          id: uuidv4(),
          email: email,
          created_at: this.timeGenerated,
          status: "pending",
          isEmailVerified: false,
          verificationCode: code,
          permissions: permissions,
          firstName: firstName,
          lastName: lastName,
          empyloID: empyloID,
          role: role as string as SystemRole,
        },
      });

      if (newCreatedEntity) {
        await this.mailService.addUserSignUp({
          to: dto.email,
          data: {
            password: randomPassword,
          },
        });
      }
    }

    return {
      message: "Admin user created successfully",
    };
  }

  async loginAdminUser(dto: LoginDto) {
    const { email, password } = dto;

    const foundUser = await this.prisma.empyloUser.findUnique({
      where: {
        email,
      },
    });

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
      id: foundUser.id,
      email: foundUser.email,
      firstName: foundUser.firstName,
      lastName: foundUser.lastName,
      status: foundUser.status,
      created_at: foundUser.created_at,
      gender: foundUser.gender,
      maritalStatus: foundUser.maritalStatus,
      lastLogin: this.timeGenerated,
      isEmailVerified: foundUser.isEmailVerified,
      updated_at: foundUser.updated_at,
      isActive: foundUser.isActive,
      role: foundUser.role,
      empyloID: foundUser.empyloID,
      permissions: foundUser.permissions,
    };

    const allToken = this.passwordService.generateTokens(payload);

    const data = {
      lastLogin: this.timeGenerated,
    };

    if (allToken) {
      await this.prisma.empyloUser.update({
        where: {
          id: foundUser.id,
        },
        data: data,
      });

      return {
        message: "You have login successfully",
        data: {
          ...allToken,
        },
      };
    }
  }

  async verifyAccount(dto: VerifyEmailDto) {
    const { code } = dto;

    const foundUserWithCode = await this.prisma.empyloUser.findUnique({
      where: {
        verificationCode: code,
      },
    });

    if (!foundUserWithCode) {
      throw new BadRequestException("Code not found");
    }

    const data = {
      isEmailVerified: true,
      verificationCode: null,
      status: "active" as unknown as UserStatus,
      isActive: true,
      updated_at: this.timeGenerated,
    };

    const updatedUser = await this.prisma.empyloUser.update({
      where: {
        id: foundUserWithCode.id,
      },
      data: data,
    });

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

  async forgotPassword(dto: ForgotPasswordDto) {
    const { email } = dto;
    try {
      const foundUserChecked = await this.prisma.empyloUser.findUnique({
        where: {
          email,
        },
      });

      if (!foundUserChecked) {
        throw new BadRequestException("Admin User not found");
      }

      const codeGenerated = crypto.randomInt(100000, 999999).toString();

      const data = {
        password_resetCode: codeGenerated,
      };

      const updatedfoundUser = await this.prisma.empyloUser.update({
        where: {
          id: foundUserChecked.id,
        },
        data: data,
      });

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

    const foundUser = await this.prisma.empyloUser.findUnique({
      where: {
        passwordResetCode: code,
      },
    });

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

    const updatedUser = await this.prisma.empyloUser.update({
      where: {
        id: foundUser.id,
      },
      data: data,
    });

    if (!updatedUser) {
      throw new BadRequestException("Failed to update user password");
    }

    return {
      message: "Your password has been successfully reset",
    };
  }

  async changePassword(id: string, dto: ChangePasswordDto) {
    const { current_password, new_password } = dto;

    const foundUser = await this.prisma.empyloUser.findUnique({
      where: {
        id: id,
      },
    });

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

        const updatedUser = await this.prisma.empyloUser.update({
          where: {
            id: foundUser.id,
          },
          data: data,
        });

        if (updatedUser === null) {
          throw new BadRequestException("Failed to update user password");
        }

        return {
          message: "Your password has been successfully reset",
        };
      }
    }
  }

  async activateEmpyloUser(id: string) {
    const activatedUser = await this.prisma.empyloUser.update({
      where: {
        id,
      },
      data: {
        isActive: true,
        updated_at: this.timeGenerated,
      },
    });

    if (!activatedUser) {
      throw new BadRequestException("Failed to  activate  admin user");
    }

    if (activatedUser) {
      await this.mailService.activateVariousUsers({
        to: activatedUser.email,
        data: {
          name: activatedUser.firstName,
        },
      });
      return {
        message: "Admin user activated successfully",
      };
    }
  }

  async deactivateEmpyloUser(id: string) {
    const deactivatedUser = await this.prisma.empyloUser.update({
      where: {
        id,
      },
      data: {
        isActive: false,
        updated_at: this.timeGenerated,
      },
    });

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

  async getEmpyloUserById(id: string) {
    const user = await this.prisma.empyloUser.findUnique({
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
        permissions: true,
        role: true,
        empyloID: true,
      },
    });

    if (!user) {
      throw new BadRequestException("Admin user not found");
    }

    return {
      message: "Admin user fetched successfully",
      data: user,
    };
  }

  async getAllEmpyloUsers(dto: GetAllUserDto) {
    const {
      created_at,
      page = 1,
      limit = 10,
      id,
      search,
      status,
      phoneNumber,
      gender,
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

      // Exclude users with the "superAdmin" role
      where.role = {
        not: {
          not: "superAdmin",
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
          { id: { contains: search.toString(), mode: "insensitive" } },
          // Add more fields as needed
        ];
      }

      const [allAdminUsers, totalCount] = await Promise.all([
        this.prisma.empyloUser.findMany({
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
            permissions: true,
            role: true,
            empyloID: true,
          },
          orderBy: { created_at: "desc" },
          skip,
          take: offset as number,
        }),
        this.prisma.empyloUser.count({
          where,
        }),
      ]);

      const totalPages = Math.ceil(totalCount / limitNumber);

      const message = allAdminUsers.length
        ? "Admins fetched successfully"
        : "No Admins Found";
      const success = allAdminUsers?.length ? true : false;

      return {
        message,
        data: {
          total: success ? totalCount : 0,
          total_pages: success ? totalPages : 0,
          current_page: success ? Number(page) : 0,
          page_size: success ? offset : 0,
          admin_list: allAdminUsers,
        },
      };
    } catch (error) {
      console.error("Error in get all admins:", error);
      throw error;
    }
  }
}
