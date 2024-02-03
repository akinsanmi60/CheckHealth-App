import {
  BadRequestException,
  Injectable,
  UseInterceptors,
} from "@nestjs/common";
import { AuthResolver } from "src/auth/authFinder.service";
import { PasswordService } from "src/auth/password.service";
import { ResponseInterceptor } from "src/filter/responseFilter/respone.service";
import { MailService } from "../../mail/mail.service";
import { PrismaService } from "src/prisma/prisma.service";
import { UserCircle } from "src/types/appModel.type";
import { CompanyGettingStartedDto } from "../circles/dto/circle.dto";
import * as crypto from "crypto";
import { v4 as uuidv4 } from "uuid";
import { GetAllUserCirclesDto } from "./dto/usercircle.dto";

@Injectable()
@UseInterceptors(ResponseInterceptor)
export class UserService {
  private readonly timeGenerated: string;

  constructor(
    private authResolver: AuthResolver,
    private prisma: PrismaService,
    private readonly mailService: MailService,
    private readonly passwordService: PasswordService,
  ) {
    this.timeGenerated = new Date().toISOString();
  }

  async createUserCirlce(
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

    if (participantsList.length > 5) {
      throw new BadRequestException("Maximum of 10 participants allowed.");
    }

    // Ensure participantsList is an array
    if (!Array.isArray(participantsList)) {
      throw new BadRequestException("Participants list should be an array.");
    }

    const foundCircle = (await this.authResolver.findCirlceWithField(
      dto.circleName,
      "userCircleName",
      "userCircle",
    )) as UserCircle;

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

        const circleCreated = await this.prisma.userCircles.create({
          data: {
            id: uuidv4(),
            circleImg: file.filename,
            userCircleName: dto.circleName,
            userCircleDescription: dto.circleDescription,
            userCircleNos: `${firstThreeLetters}-${code}${lastTwo}`,
            user: {
              connect: { id: id },
            },
            membersList: {
              connect: foundUsers.map(user => ({
                id: user.id,
              })),
            },
            created_at: this.timeGenerated,
            userCircleStatus: "active",
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

  async getAllUserCircles(dto: GetAllUserCirclesDto) {
    const {
      created_at,
      page = 1,
      limit = 10,
      id,
      search,
      userCircleNos,
      activityLevel,
      userCircleStatus,
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

      if (userCircleNos) {
        where.userCircleNos = {
          contains: userCircleNos,
          mode: "insensitive",
        };
      }

      if (userCircleStatus) {
        where.userCircleStatus = userCircleStatus;
      }

      if (activityLevel) {
        where.activityLevel = activityLevel;
      }

      if (search) {
        where.OR = [
          {
            userCircleStatus: search.toString(),
          },

          {
            userCircleNos: search.toString(),
          },

          {
            activityLevel: search.toString(),
          },
          {
            userCircleName: search.toString(),
          },
          { id: { contains: search.toString(), mode: "insensitive" } },
          // Add more fields as needed
        ];
      }

      const [allUserCircles, totalCount] = await Promise.all([
        this.prisma.userCircles.findMany({
          where,
          select: {
            id: true,
            created_at: true,
            activityLevel: true,
            userCircleDescription: true,
            circleImg: true,
            userCircleName: true,
            userId: true,
            wellbeingScore: true,
            userCircleStatus: true,
            userCircleNos: true,
            membersList: {
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
        this.prisma.userCircles.count({
          where,
        }),
      ]);

      const totalPages = Math.ceil(totalCount / limitNumber);

      const message = allUserCircles.length
        ? "User circles fetched successfully"
        : "No user circles Found";
      const success = allUserCircles?.length ? true : false;

      return {
        message,
        data: {
          total: success ? totalCount : 0,
          total_pages: success ? totalPages : 0,
          current_page: success ? Number(page) : 0,
          page_size: success ? offset : 0,
          comapnyCircle_list: allUserCircles,
        },
      };
    } catch (error) {
      console.error("Error in get all user circles:", error);
      throw error;
    }
  }

  async getUserCircleById(id: string) {
    const userCircle = await this.prisma.userCircles.findUnique({
      where: { id },
      select: {
        id: true,
        created_at: true,
        activityLevel: true,
        userCircleDescription: true,
        circleImg: true,
        userCircleName: true,
        userId: true,
        wellbeingScore: true,
        userCircleStatus: true,
        userCircleNos: true,
        membersList: {
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
          orderBy: { created_at: "desc" },
        },
      },
    });

    if (!userCircle) {
      throw new BadRequestException("User circle not found");
    }

    return {
      message: "User circle fetched successfully",
      data: userCircle,
    };
  }

  async activateUserCircle(id: string) {
    const data = {
      coyCircleStatus: "active",
      updated_at: this.timeGenerated,
    };

    const activatedCircle = (await this.authResolver.findAndUpdateCircleField(
      data,
      "userCircle",
      "id",
      id,
    )) as UserCircle;

    if (!activatedCircle) {
      throw new BadRequestException(
        `Failed to activate company ${activatedCircle.userCircleNos}`,
      );
    }

    if (activatedCircle) {
      return {
        message: `Company circle ${activatedCircle.userCircleNos} activated successfully`,
      };
    }
  }

  async deactivateUserCircle(id: string) {
    const data = {
      coyCircleStatus: "inactive",
      updated_at: this.timeGenerated,
    };

    const deactivatedCircle = (await this.authResolver.findAndUpdateCircleField(
      data,
      "userCircle",
      "id",
      id,
    )) as UserCircle;

    if (!deactivatedCircle) {
      throw new BadRequestException(
        `Failed to deactivate company circle ${deactivatedCircle.userCircleNos}`,
      );
    }

    if (deactivatedCircle) {
      return {
        message: `Company circle ${deactivatedCircle.userCircleNos} deactivated successfully`,
      };
    }
  }

  async leaveUserCircle(id: string, dto: any) {
    try {
      await this.prisma.$transaction(async () => {
        const findCirlceWithCircleNos = await this.prisma.userCircles.update({
          where: {
            userCircleNos: dto.userCircleNos,
          },
          data: {
            membersList: {
              disconnect: {
                id: id,
              },
            },
          },
        });

        if (!findCirlceWithCircleNos) {
          throw new BadRequestException(
            `Failed to remove you from company circle ${findCirlceWithCircleNos.userCircleNos}`,
          );
        }

        const disconnectFromUser = await this.prisma.user.update({
          where: {
            id: id,
          },
          data: {
            userCircles: {
              disconnect: {
                userCircleNos: findCirlceWithCircleNos.userCircleNos,
              },
            },
          },
        });

        if (!disconnectFromUser) {
          throw new BadRequestException(
            `Failed to remove you from company circle ${findCirlceWithCircleNos.userCircleNos}`,
          );
        }

        return {
          message: `Successfully removed you from company circle ${findCirlceWithCircleNos.userCircleNos}`,
        };
      });
    } catch (error) {
      console.error("Error in leave user circle:", error);
      throw error || new Error("Failed to leave user circle");
    }
  }
}
