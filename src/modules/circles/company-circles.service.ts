import {
  BadRequestException,
  Injectable,
  UseInterceptors,
} from "@nestjs/common";
import { AuthResolver } from "src/auth/authFinder.service";
import { ResponseInterceptor } from "src/filter/responseFilter/respone.service";
import { PrismaService } from "src/prisma/prisma.service";
import {
  AddMemberToCircleDto,
  CompanyGettingStartedDto,
  GetAllCirclesDto,
} from "./dto/company.dto";
import { CompanyCirle } from "src/types/appModel.type";
import * as crypto from "crypto";
import { MailService } from "../../mail/mail.service";
import { PasswordService } from "src/auth/password.service";
import { v4 as uuidv4 } from "uuid";

@Injectable()
@UseInterceptors(ResponseInterceptor)
export class CirclesService {
  private readonly timeGenerated: string;

  constructor(
    private authResolver: AuthResolver,
    private prisma: PrismaService,
    private readonly mailService: MailService,
    private readonly passwordService: PasswordService,
  ) {
    this.timeGenerated = new Date().toISOString();
  }

  async createCirlce(
    dto: CompanyGettingStartedDto,
    id: string,
    file: Express.Multer.File,
  ) {
    let participantsList = [] as string[];

    participantsList = JSON.parse(dto.participantsList as unknown as string);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check each email in the array
    for (const email of participantsList) {
      if (!emailRegex.test(email)) {
        // If any email does not match the email format, return false
        throw new BadRequestException("Invalid email format.");
      }
    }

    //  using string destructuring method to get the first three letters of the name
    const [first, second, third] = dto.circleName;

    const firstThreeLetters = first + second + third;

    const code = crypto.randomInt(100, 999).toString();

    const lastTwo = dto.circleName.slice(-2);

    if (participantsList.length === 0) {
      throw new BadRequestException("Participants list cannot be empty.");
    }

    if (participantsList.length > 10) {
      throw new BadRequestException("Maximum of 10 participants allowed.");
    }

    // Ensure participantsList is an array
    if (!Array.isArray(participantsList)) {
      throw new BadRequestException("Participants list should be an array.");
    }

    const foundCircle = (await this.authResolver.findCirlceWithField(
      dto.circleName,
      "coyCircleName",
      "companyCircle",
    )) as CompanyCirle;

    if (foundCircle) {
      throw new BadRequestException(
        "Circle with the same name already exists.",
      );
    }

    try {
      await this.prisma.$transaction(async () => {
        // Find users by email addresses
        const foundUsers = await this.prisma.user.findMany({
          where: {
            email: {
              in: participantsList,
            },
          },
        });

        // Ensure all participants are found
        if (foundUsers.length !== participantsList.length) {
          throw new BadRequestException("One or more participants not found.");
        }

        const circleCreated = await this.prisma.companyCircles.create({
          data: {
            id: uuidv4(),
            circleImg: file.filename,
            coyCircleName: dto.circleName,
            coyCircleDescription: dto.circleDescription,
            coyCircleNos: `${firstThreeLetters}-${code}${lastTwo}`,
            companyUser: {
              connect: { id: id },
            },
            memberList: {
              connect: foundUsers.map(user => ({
                id: user.id,
              })),
            },
            created_at: this.timeGenerated,
            coyCircleStatus: "active",
          },
        });

        if (!circleCreated) {
          throw new BadRequestException("Failed to create circle.");
        }

        return {
          message: "Circle created successfully.",
        };
      });
    } catch (error) {
      throw error || new Error("Failed to create circle.");
    }
  }

  async getAllCompanyCircles(dto: GetAllCirclesDto) {
    const {
      created_at,
      page = 1,
      limit = 10,
      id,
      search,
      coyCircleNos,
      activityLevel,
      coyCircleStatus,
    } = dto;

    try {
      const limitNumber = Number(limit);
      const skip = ((page as number) - 1) * limitNumber;
      const offset = limitNumber;

      const where: { [key: string]: any } = {};

      if (id) {
        where.id = { contains: id, mode: "insensitive" };
      }

      if (created_at) {
        where.created_at = {
          gte: new Date(created_at).toISOString(),
        };
      }

      if (coyCircleNos) {
        where.coyCircleNos = {
          contains: coyCircleNos,
          mode: "insensitive",
        };
      }

      if (coyCircleStatus) {
        where.coyCircleStatus = coyCircleStatus;
      }

      if (activityLevel) {
        where.activityLevel = activityLevel;
      }

      if (search) {
        where.OR = [
          {
            coyCircleStatus: search.toString(),
          },

          {
            coyCircleNos: search.toString(),
          },

          {
            activityLevel: search.toString(),
          },
          {
            coyCircleName: search.toString(),
          },
          { id: { contains: search.toString(), mode: "insensitive" } },
          // Add more fields as needed
        ];
      }

      const [allCoyCircles, totalCount] = await Promise.all([
        this.prisma.companyCircles.findMany({
          where,
          select: {
            id: true,
            created_at: true,
            activityLevel: true,
            coyCircleDescription: true,
            circleImg: true,
            coyCircleName: true,
            companyUserId: true,
            wellbeingScore: true,
            coyCircleStatus: true,
            coyCircleNos: true,
            memberList: {
              select: {
                email: true,
                passportImg: true,
                ageRange: true,
                gender: true,
                department: true,
                phoneNumber: true,
                jobRole: true,
                role: true,
              },
            },
          },
          orderBy: { created_at: "desc" },
          skip,
          take: offset as number,
        }),
        this.prisma.companyCircles.count({
          where,
        }),
      ]);

      const totalPages = Math.ceil(totalCount / limitNumber);

      const message = allCoyCircles.length
        ? "Company circles fetched successfully"
        : "No Company circles Found";
      const success = allCoyCircles?.length ? true : false;

      return {
        message,
        data: {
          total: success ? totalCount : 0,
          total_pages: success ? totalPages : 0,
          current_page: success ? Number(page) : 0,
          page_size: success ? offset : 0,
          comapnyCircle_list: allCoyCircles,
        },
      };
    } catch (error) {
      console.error("Error in get all company circles:", error);
      throw error;
    }
  }

  async getCompanyCircleById(id: string) {
    const companyCircle = await this.prisma.companyCircles.findUnique({
      where: { id },
      select: {
        id: true,
        created_at: true,
        activityLevel: true,
        coyCircleDescription: true,
        circleImg: true,
        coyCircleName: true,
        companyUserId: true,
        wellbeingScore: true,
        coyCircleStatus: true,
        coyCircleNos: true,
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
            role: true,
          },
        },
      },
    });

    if (!companyCircle) {
      throw new BadRequestException("Company circle not found");
    }

    return {
      message: "Company circle fetched successfully",
      data: companyCircle,
    };
  }

  async deactivateCompanyCircle(id: string) {
    const data = {
      coyCircleStatus: "inactive",
      updated_at: this.timeGenerated,
    };

    const deactivatedUser = (await this.authResolver.findAndUpdateCircleField(
      data,
      "companyCircle",
      "id",
      id,
    )) as CompanyCirle;

    if (!deactivatedUser) {
      throw new BadRequestException(
        `Failed to deactivate company circle ${deactivatedUser.coyCircleNos}`,
      );
    }

    if (deactivatedUser) {
      return {
        message: `Company circle ${deactivatedUser.coyCircleNos} deactivated successfully`,
      };
    }
  }

  async activateCompanyCircle(id: string) {
    const data = {
      coyCircleStatus: "active",
      updated_at: this.timeGenerated,
    };

    const activatedCompany = (await this.authResolver.findAndUpdateCircleField(
      data,
      "companyCircle",
      "id",
      id,
    )) as CompanyCirle;

    if (!activatedCompany) {
      throw new BadRequestException(
        `Failed to activate company ${activatedCompany.coyCircleNos}`,
      );
    }

    if (activatedCompany) {
      return {
        message: `Company circle ${activatedCompany.coyCircleNos} activated successfully`,
      };
    }
  }

  async deleteCompanyCircle(id: string) {
    const companyCircle = await this.prisma.companyCircles.delete({
      where: { id },
    });

    if (!companyCircle) {
      throw new BadRequestException(
        "Failed to delete company circle. Please try again later",
      );
    }

    return {
      message: "Company circle deleted successfully",
    };
  }

  async addMemberToCircle(id: string, dto: AddMemberToCircleDto) {
    const foundUser = await this.authResolver.findUserWithField(
      dto.email,
      "email",
      "user",
    );

    if (!foundUser) {
      const randomPassword = crypto.randomBytes(6).toString("hex");
      const hashedPassword =
        await this.passwordService.hashPassword(randomPassword);
      const code = crypto.randomInt(1000, 9999).toString();

      const newCreatedEntity = await this.prisma.user.create({
        data: {
          id: uuidv4(),
          email: dto.email,
          created_at: this.timeGenerated,
          password: hashedPassword,
          status: "pending",
          isEmailVerified: false,
          verificationCode: code,
          termsConditions: true,
          accountType: "clientUser",
        },
      });

      if (newCreatedEntity) {
        await this.mailService.userSignUp({
          to: dto.email,
          data: {
            code: code.toString(),
          },
        });
      }
    }

    const memberInCircle = await this.prisma.companyCircles.update({
      where: {
        id: id,
      },
      data: {
        memberList: {
          create: {
            id: uuidv4(),
            email: dto.email,
            companyUser: {
              connect: {
                id: id,
              },
            },
          },
        },
      },
    });

    if (!memberInCircle) {
      throw new BadRequestException(
        "Failed to add member to company circle. Please try again later",
      );
    }
  }
}
