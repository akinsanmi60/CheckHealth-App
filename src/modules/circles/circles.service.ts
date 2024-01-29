import { Injectable, UseInterceptors } from "@nestjs/common";
import { AuthResolver } from "src/auth/authFinder.service";
import { ResponseInterceptor } from "src/filter/responseFilter/respone.service";
import { PrismaService } from "src/prisma/prisma.service";
import { CompanyGettingStartedDto } from "./dto/circle.dto";

@Injectable()
@UseInterceptors(ResponseInterceptor)
export class CirclesService {
  constructor(
    private authResolver: AuthResolver,
    private prisma: PrismaService,
  ) {}
  async createCirlce(
    dto: CompanyGettingStartedDto,
    id: string,
    file: Express.Multer.File,
  ) {
    console.log(JSON.stringify(dto.participantsList as any));
    // Ensure participantsList is an array
    if (!Array.isArray(dto.participantsList)) {
      throw new Error("Participants list should be an array.");
    }

    const circleCreated = await this.prisma.companyCircles.create({
      data: {
        circleImg: file.filename,
        coyCircleName: dto.circleName,
        coyCircleDescription: dto.circleDescription,
        companyUser: {
          connect: { id: id },
        },
        memberList: {
          //   createMany: {
          //     data: dto.participantsList.map(member => ({
          //       email: member,
          //     })),
          //   },
          connect: ["akintunde60@gmail.com"].map(member => ({
            email: member,
          })),
        },
      },
    });

    return circleCreated;
  }
}
