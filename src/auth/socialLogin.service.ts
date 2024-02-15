import { BadRequestException } from "@nestjs/common";
import { PasswordService } from "./password.service";
import { SocialInterface } from "../social/interfaces/social.interface";
import { PrismaService } from "src/prisma/prisma.service";
import { v4 as uuidv4 } from "uuid";
import { MailService } from "../mail/mail.service";
import { CompanyUser } from "src/types/appModel.type";

export class SocialLoginService {
  private readonly timeGenerated: string;

  constructor(
    private readonly passwordService: PasswordService,
    private readonly prisma: PrismaService,
    private readonly mailService: MailService,
  ) {
    this.timeGenerated = new Date().toISOString();
  }
  async validateUserSocialLogin(
    authProvider: string,
    socialData: SocialInterface,
  ) {
    const socialEmail = socialData.email?.toLowerCase();

    const userByEmail = await this.prisma.user.findUnique({
      where: {
        email: socialEmail,
      },
    });

    if (
      userByEmail.socialId !== socialData.id &&
      userByEmail.socialProvider !== authProvider
    ) {
      throw new BadRequestException(
        "Please login with the proper social media account",
      );
    }

    if (!userByEmail) {
      const newCreatedEntity = await this.prisma.user.create({
        data: {
          id: uuidv4(),
          email: socialEmail,
          created_at: this.timeGenerated,
          password: null,
          status: "active",
          isEmailVerified: true,
          verificationCode: null,
          termsConditions: true,
          isActive: true,
        },
      });

      if (newCreatedEntity) {
        await this.mailService.userSocialSignUp({
          to: socialEmail,
          data: {
            name: socialData.firstName,
          },
        });

        const payload = {
          accountType: userByEmail.accountType,
          id: userByEmail.id,
          email: userByEmail.email,
          firstName: userByEmail.firstName,
          lastName: userByEmail.lastName,
          status: userByEmail.status,
          created_at: userByEmail.created_at,
          lastLogin: this.timeGenerated,
          isEmailVerified: userByEmail.isEmailVerified,
          isActive: userByEmail.isActive,
          role: userByEmail.role,
        };

        const allToken = this.passwordService.generateTokens(payload);

        return {
          message: `Account successfully created.`,
          data: {
            ...allToken,
          },
        };
      }
    }
  }

  async validateCompanySocialLogin(
    authProvider: string,
    socialData: SocialInterface,
  ) {
    const socialEmail = socialData.email?.toLowerCase();

    let newCreatedEntity = {} as CompanyUser;

    const userByEmail = await this.prisma.companyUser.findUnique({
      where: {
        email: socialEmail,
      },
    });

    const conditioForCheck =
      userByEmail.socialId !== socialData.id &&
      userByEmail.socialProvider !== authProvider;

    if (conditioForCheck) {
      throw new BadRequestException(
        "Please login with the proper social media account",
      );
    }

    if (!userByEmail) {
      newCreatedEntity = await this.prisma.user.create({
        data: {
          id: uuidv4(),
          email: socialEmail,
          created_at: this.timeGenerated,
          password: null,
          status: "active",
          isEmailVerified: true,
          verificationCode: null,
          termsConditions: true,
          isActive: true,
        },
      });

      if (newCreatedEntity) {
        await this.mailService.userSocialSignUp({
          to: socialEmail,
          data: {
            name: socialData.firstName,
          },
        });
      }
    }

    if (conditioForCheck || newCreatedEntity) {
      const payload = {
        id: userByEmail.id || newCreatedEntity.id,
        email: userByEmail.email || newCreatedEntity,
        companyName: userByEmail.companyName,
        phoneNumber: userByEmail.phoneNumber,
        status: userByEmail.status,
        created_at: userByEmail.created_at,
        lastLogin: this.timeGenerated,
        isEmailVerified: userByEmail.isEmailVerified,
        isActive: userByEmail.isActive,
        role: userByEmail.role,
      };

      const allToken = this.passwordService.generateTokens(payload);

      return {
        message: `Account successfully created.`,
        data: {
          ...allToken,
        },
      };
    }
  }
}
