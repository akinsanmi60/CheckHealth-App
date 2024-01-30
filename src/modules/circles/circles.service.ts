import {
  BadRequestException,
  Injectable,
  UseInterceptors,
} from "@nestjs/common";
import { AuthResolver } from "src/auth/authFinder.service";
import { ResponseInterceptor } from "src/filter/responseFilter/respone.service";
import { PrismaService } from "src/prisma/prisma.service";
import { CompanyGettingStartedDto, GetAllCirclesDto } from "./dto/circle.dto";
import { CompanyCirle } from "src/types/appModel.type";
import * as crypto from "crypto";

@Injectable()
@UseInterceptors(ResponseInterceptor)
export class CirclesService {
  private readonly timeGenerated: string;

  constructor(
    private authResolver: AuthResolver,
    private prisma: PrismaService,
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
        const circleCreated = await this.prisma.companyCircles.create({
          data: {
            circleImg: file.filename,
            coyCircleName: dto.circleName,
            coyCircleDescription: dto.circleDescription,
            coyCircleNos: `${firstThreeLetters}-${code}${lastTwo}`,
            companyUser: {
              connect: { id: id },
            },
            memberList: {
              connect: participantsList.map(member => ({
                email: member,
              })),
            },
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

      if (status) {
        where.status = status;
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
                firstName: true,
                lastName: true,
                passportImg: true,
                ageRange: true,
                gender: true,
                department: true,
                phoneNumber: true,
                role: true,
              },
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
            email: true,
            firstName: true,
            lastName: true,
            passportImg: true,
            ageRange: true,
            gender: true,
            department: true,
            phoneNumber: true,
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
      coyCircleStatus: true,
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
      coyCircleStatus: true,
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
}
