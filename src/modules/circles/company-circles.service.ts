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
import { CompanyCirle, Users } from "src/types/appModel.type";
import * as crypto from "crypto";
import { MailService } from "../../mail/mail.service";
import { PasswordService } from "src/auth/password.service";
import { v4 as uuidv4 } from "uuid";
import { parse as csvParser } from "csv-parse";
import { Readable } from "stream";
import { CircleStatus } from "../../../prisma/generated/client";

@Injectable()
@UseInterceptors(ResponseInterceptor)
export class CirclesService {
  private readonly timeGenerated: string;
  private readonly emailRegex: RegExp;

  constructor(
    private authResolver: AuthResolver,
    private prisma: PrismaService,
    private readonly mailService: MailService,
    private readonly passwordService: PasswordService,
  ) {
    this.timeGenerated = new Date().toISOString();
    this.emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  }

  async createCirlce(
    dto: CompanyGettingStartedDto,
    id: string,
    file: Express.Multer.File,
  ) {
    const findCompany = await this.prisma.companyUser.findUnique({
      where: {
        id: id,
      },
    });

    if (!findCompany) {
      throw new BadRequestException("Company not found");
    }

    let participantsList = [] as string[];

    participantsList = JSON.parse(dto.participantsList as unknown as string);

    // Check each email in the array
    for (const email of participantsList) {
      if (!this.emailRegex.test(email)) {
        // If any email does not match the email format, return false
        throw new BadRequestException("Invalid email format.");
      }
    }

    //  using string destructuring method to get the first three letters of the name
    const [first, second, third] = dto.circleName;

    const firstThreeLetters = first + second + third;

    const code = crypto.randomInt(100, 999).toString();

    const lastTwo = dto.circleName.slice(-2);

    const circleGeneratedNos = `${firstThreeLetters}-${code}${lastTwo}`;

    const inviteUrl =
      crypto.randomBytes(4).toString("hex") + "-" + circleGeneratedNos;

    if (participantsList.length === 0) {
      throw new BadRequestException("Participants list cannot be empty.");
    }

    if (participantsList.length > 5) {
      throw new BadRequestException("Maximum of 5 participants allowed.");
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
      // Find users by email addresses
      const foundUsers = await this.prisma.user.findMany({
        where: {
          email: {
            in: participantsList,
          },
        },
      });

      // Ensure all participants are found
      if (foundUsers?.length !== participantsList?.length) {
        const notFoundEmails = participantsList.filter(
          email => !foundUsers.map(user => user.email).includes(email),
        );
        throw new BadRequestException(
          `One or more participants not found: ${notFoundEmails.join(", ")}`,
        );
      }

      const circleCreated = await this.prisma.companyCircles.create({
        data: {
          id: uuidv4(),
          circleImg: file.filename,
          coyCircleName: dto.circleName,
          coyCircleDescription: dto.circleDescription,
          coyCircleNos: circleGeneratedNos,
          coyCircleShareLink: inviteUrl,
          companyUser: {
            connect: { id: id },
          },
          memberList: {
            connect: foundUsers.map(user => ({
              id: user.id,
              accountType: "clientUser",
            })),
          },
          created_at: this.timeGenerated,
          coyCircleStatus: "active",
        },
      });

      if (!circleCreated) {
        throw new BadRequestException("Failed to create circle.");
      }

      if (circleCreated) {
        const addUsersToMembers = await this.prisma.companyUser.update({
          where: {
            id: id,
          },
          data: {
            membersList: {
              connect: foundUsers.map(user => ({
                id: user.id,
              })),
            },
          },
        });

        if (!addUsersToMembers) {
          await this.prisma.companyUser.update({
            where: {
              id: id,
            },
            data: {
              membersList: {
                disconnect: foundUsers.map(user => ({
                  id: user.id,
                })),
              },
            },
          });
        }
        return {
          message: addUsersToMembers
            ? "Circle created successfully and added users to members list"
            : "Circle created successfully but failed to add users to members list",
        };
      }
    } catch (error) {
      console.error(error);
      throw error || new Error("Failed to create circle.");
    }
  }

  async removeUserFromMembersList(id: string, userId: string) {
    const [checkCompanyUser, checkUser] = await Promise.all([
      this.prisma.companyUser.findUnique({
        where: {
          id: id,
        },
      }),
      this.prisma.user.findUnique({
        where: {
          id: userId,
        },
      }),
    ]);

    if (!checkCompanyUser) {
      throw new BadRequestException("Company user not found");
    }

    if (!checkUser) {
      throw new BadRequestException("User not found");
    }

    const removeUserCoyMember = await this.prisma.companyUser.update({
      where: {
        id: checkCompanyUser?.id,
      },
      data: {
        membersList: {
          disconnect: {
            id: checkUser?.id,
            accountType: "personalUser",
          },
        },
      },
    });

    if (!removeUserCoyMember) {
      throw new BadRequestException("Failed to remove user from members list");
    }

    const coyCircle = await this.prisma.companyCircles.findMany({
      where: {
        companyUserId: checkCompanyUser?.id,
      },
    });

    const circleUpdates = coyCircle.map(circle =>
      this.prisma.companyCircles.update({
        where: { id: circle.id },
        data: {
          memberList: {
            disconnect: { id: checkUser?.id },
          },
        },
      }),
    );

    await Promise.all(circleUpdates);

    return {
      message: "User removed from members list successfully",
    };
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
        where.activityLevel = { contain: activityLevel, mode: "insensitive" };
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
            circleStatus: true,
            coyCircleShareLink: true,
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
        circleStatus: true,
        coyCircleShareLink: true,
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
            listOfScoreDetail: {
              select: {
                created_at: true,
                coyCirleID: true,
                weeklyScore: true,
                dailyScore: true,
                ownerID: true,
              },
            },
          },
        },
      },
    });

    if (!companyCircle) {
      throw new BadRequestException("Company circle not found");
    }

    const currentDate = new Date();

    const startOfCurrentWeek = new Date(
      currentDate.setDate(currentDate.getDate() - currentDate.getDay()),
    ); // Move back to Sunday

    const endOfCurrentWeek = new Date(
      currentDate.setDate(currentDate.getDate() + 6),
    ); // Add 6 days to get Saturday

    const listOfScore = companyCircle.memberList.flatMap(member =>
      member.listOfScoreDetail.filter(score => {
        const createdAtDate = new Date(score.created_at);
        return (
          createdAtDate > startOfCurrentWeek && createdAtDate < endOfCurrentWeek
        );
      }),
    );

    const reshapeDataDueToScore = companyCircle.memberList.map(member => {
      return {
        ...member,
        listOfScoreDetail: listOfScore.filter(
          score => score.coyCirleID === id && score.ownerID === member.id,
        ),
      };
    });

    return {
      message: "Company circle fetched successfully",
      data: reshapeDataDueToScore,
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
    const findCircle = await this.prisma.companyCircles.findUnique({
      where: {
        id: id,
      },
      select: {
        id: true,
        memberList: {
          select: {
            id: true,
            email: true,
          },
        },
      },
    });

    if (!findCircle) {
      throw new BadRequestException("Circle not found");
    }

    const foundUser = (await this.authResolver.findUserWithField(
      dto.email,
      "email",
      "user",
    )) as Users;

    // Check if user is already a member of the circle
    const isUserInCircle = findCircle.memberList.some(
      member => member.id === foundUser.id,
    );

    if (isUserInCircle) {
      throw new BadRequestException("User is already a member of the circle");
    }

    let newCreatedEntity = {} as Users;

    if (!foundUser) {
      const randomPassword = crypto.randomBytes(6).toString("hex");

      const hashedPassword =
        await this.passwordService.hashPassword(randomPassword);

      const code = crypto.randomInt(1000, 9999).toString();

      newCreatedEntity = await this.prisma.user.create({
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
        await this.mailService.addUserSignUp({
          to: dto.email,
          data: {
            password: randomPassword,
            code: code,
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
          connect: {
            id: foundUser?.id || newCreatedEntity?.id,
          },
        },
      },
    });

    if (!memberInCircle) {
      throw new BadRequestException("Failed to add member to company circle.");
    }

    if (memberInCircle) {
      return {
        message: "Member added successfully",
      };
    }
  }

  async removeMemberFromCircle(id: string, memberId: string) {
    const removedMember = await this.prisma.companyCircles.update({
      where: {
        id: id,
      },
      data: {
        memberList: {
          delete: {
            id: memberId,
          },
        },
      },
    });

    if (!removedMember) {
      throw new BadRequestException(
        "Failed to remove member from company circle. Please try again later",
      );
    }

    if (removedMember) {
      return {
        message: "Member removed successfully",
      };
    }
  }

  async memberBatchUploadCircles(id: string, file: Express.Multer.File) {
    // I have to create a Readable stream from the buffer because the csv-parser library does not support reading from files
    const results = [];
    const parse = csvParser({
      columns: true,
      skip_empty_lines: true,
      trim: true,
      delimiter: ",",
      ltrim: true,
    });
    await new Promise((resolve, reject) => {
      // Create a Readable stream from the buffer
      const bufferStream = Readable.from([file.buffer]);

      bufferStream
        .pipe(parse)
        .on("data", data => results.push(data))
        .on("end", () => {
          if (results.length > 0) {
            resolve(results);
          }
        })
        .on("error", error => reject(error));
    });

    // Remove duplicates after flattening the keys and values of the objects in the array
    const resultArray = Array.from(
      new Set(
        results.flatMap(obj => [
          ...Object.keys(obj).flat(),
          ...Object.values(obj).flat(),
        ]),
      ),
    );

    if (resultArray.length === 0) {
      throw new BadRequestException(
        "Failed to upload member. Please try again later",
      );
    }

    // Check each email in the array
    for (const email of resultArray) {
      if (!this.emailRegex.test(email as string)) {
        // If any email does not match the email format, return false
        throw new BadRequestException("Invalid email format.");
      }
    }

    const getAllUsersEmail = await this.prisma.user.findMany({
      select: {
        email: true,
      },
    });

    const emailArray = getAllUsersEmail.map(user => user.email);

    function filterEmailNotInArray(sourceArray, targetArray) {
      return targetArray.filter(email => !sourceArray.includes(email));
    }
    function filterEmailInArray(sourceArray, targetArray) {
      return targetArray.filter(email => sourceArray.includes(email));
    }

    const notInEmails = filterEmailNotInArray(emailArray, resultArray);
    const InEmails = filterEmailInArray(emailArray, resultArray);

    const newEntitiesPromises = notInEmails.map(async email => {
      const randomPassword = crypto.randomBytes(6).toString("hex");

      const hashedPassword =
        await this.passwordService.hashPassword(randomPassword);

      const code = crypto.randomInt(1000, 9999).toString();

      const newCreatedEntity = await this.prisma.user.create({
        data: {
          id: uuidv4(),
          email,
          created_at: this.timeGenerated,
          password: hashedPassword,
          status: "pending",
          isEmailVerified: false,
          verificationCode: code,
          termsConditions: true,
          accountType: "clientUser",
        },
      });

      if (!newCreatedEntity) {
        throw new BadRequestException("Failed to create user");
      }

      await this.mailService.addUserSignUp({
        to: email,
        data: { password: randomPassword, code: code },
      });

      return newCreatedEntity;
    });

    const newEntities = await Promise.all(newEntitiesPromises);

    const foundUsers = await this.prisma.user.findMany({
      where: {
        email: {
          in: InEmails,
        },
      },
    });

    // Combine the arrays for updating companyCircles
    const allEntities = [...newEntities, ...foundUsers] as Users[];

    //check if the user is already a member of the circle
    const checkCircle = await this.prisma.companyCircles.findUnique({
      where: {
        id: id,
      },
      select: {
        memberList: {
          where: {
            id: {
              in: allEntities.map(user => user.id),
            },
          },
        },
      },
    });

    if (checkCircle?.memberList.length > 0) {
      const inEmail = checkCircle?.memberList.map(user => user.email);
      throw new BadRequestException(
        `${inEmail} is already a member of this circle.`,
      );
    }

    const memberInCircle = await this.prisma.companyCircles.update({
      where: {
        id: id,
      },
      data: {
        memberList: {
          connect: allEntities.map(user => ({
            id: user.id,
            accountType: "clientUser",
          })),
        },
      },
    });

    if (!memberInCircle) {
      throw new BadRequestException(
        "Failed to add members to company circle. Please try again later",
      );
    }

    if (memberInCircle) {
      return {
        message: "Members added successfully",
      };
    }
    return {
      message: "Members batch uploaded successfully",
    };
  }

  async addMemberViaURLToCircle(id: string, inviteUrl: string) {
    const foundUser = (await this.authResolver.findUserWithField(
      id,
      "id",
      "user",
    )) as Users;

    if (!foundUser) {
      throw new BadRequestException("User not found. Please try again later");
    }

    const findCircle = await this.prisma.companyCircles.findUnique({
      where: {
        coyCircleShareLink: inviteUrl,
      },
    });

    if (!findCircle) {
      throw new BadRequestException("Circle with invite URL not found.");
    }

    const memberInCircle = await this.prisma.companyCircles.update({
      where: {
        coyCircleShareLink: inviteUrl,
      },
      data: {
        memberList: {
          connect: {
            id: foundUser?.id,
            accountType: "clientUser",
          },
        },
      },
    });

    if (!memberInCircle) {
      throw new BadRequestException(
        "Failed to add member to company circle. Please try again later",
      );
    }

    if (memberInCircle) {
      return {
        message: "Member added successfully",
      };
    }
  }

  async getTotalCompanyCirclesCategory(id: string) {
    const checkCompany = await this.prisma.companyUser.findUnique({
      where: {
        id: id,
      },
    });

    if (!checkCompany) {
      throw new BadRequestException(
        "Company not found. Please try again later",
      );
    }

    const [allCircle, ongoingCircle, completedCircle, unenrolledCircle] =
      await Promise.all([
        this.prisma.companyCircles.count({
          where: {
            companyUserId: checkCompany?.id,
          },
        }),
        this.prisma.companyCircles.count({
          where: {
            companyUserId: checkCompany?.id,
            circleStatus: "ongoing",
          },
        }),
        this.prisma.companyCircles.count({
          where: {
            companyUserId: checkCompany?.id,
            circleStatus: "completed",
          },
        }),
        this.prisma.companyCircles.count({
          where: {
            companyUserId: checkCompany?.id,
            circleStatus: "unenrolled",
          },
        }),
      ]);

    return {
      message: "Total company circles details",
      data: {
        allCircle: allCircle,
        completedCircle: completedCircle,
        ongoingCircle: ongoingCircle,
        unenrolledCircle: unenrolledCircle,
      },
    };
  }

  async getTotalCirclesPerMonthInYear(id: string, year: number) {
    const checkCompany = await this.prisma.companyUser.findUnique({
      where: {
        id: id,
      },
    });

    if (!checkCompany) {
      throw new BadRequestException(
        "Company not found. Please try again later",
      );
    }

    const startDate = new Date(year, 0, 1); // Start of the year
    const endDate = new Date(year + 1, 0, 0); // End of the year

    const companyCircles = await this.prisma.companyCircles.findMany({
      where: {
        companyUserId: checkCompany?.id,
      },
      select: {
        created_at: true,
        wellbeingScore: true,
      },
    });

    // Initialize an object to hold counts and total wellbeing score for each month
    const monthData = {
      January: { count: 0, totalWellbeing: 0 },
      February: { count: 0, totalWellbeing: 0 },
      March: { count: 0, totalWellbeing: 0 },
      April: { count: 0, totalWellbeing: 0 },
      May: { count: 0, totalWellbeing: 0 },
      June: { count: 0, totalWellbeing: 0 },
      July: { count: 0, totalWellbeing: 0 },
      August: { count: 0, totalWellbeing: 0 },
      September: { count: 0, totalWellbeing: 0 },
      October: { count: 0, totalWellbeing: 0 },
      November: { count: 0, totalWellbeing: 0 },
      December: { count: 0, totalWellbeing: 0 },
    };

    // Filter companyCircles for the specified year and count circles for each month
    companyCircles.forEach(circle => {
      if (circle.created_at >= startDate && circle.created_at < endDate) {
        const month = circle.created_at.getMonth(); // Get the month index (0-based)
        const wellbeingScore = circle.wellbeingScore;
        const monthName = new Intl.DateTimeFormat("en-US", {
          month: "long",
        }).format(new Date(year, month, 1));
        monthData[monthName].count++; // Increment count for the month
        monthData[monthName].totalWellbeing += Number(wellbeingScore); // Accumulate total wellbeing score
      }
    });

    // Construct the result array sorted by month
    const result = Object.entries(monthData).map(([month, data]) => ({
      month,
      totalCirclesCount: data.count,
      totalWellbeing: data.totalWellbeing / data.count,
    }));

    return {
      message: "Total company circles details",
      data: result,
    };
  }

  async getTotalCompanyCirclesPerMonth(id: string, year: number) {
    const checkCompany = await this.prisma.companyUser.findUnique({
      where: {
        id: id,
      },
    });

    if (!checkCompany) {
      throw new BadRequestException(
        "Company not found. Please try again later",
      );
    }
    const monthNames = Array.from({ length: 12 }, (_, month) =>
      new Date(year, month, 1).toLocaleString("default", { month: "long" }),
    );

    const monthlyCounts = await Promise.all(
      Array.from({ length: 12 }, async (_, month) => {
        const startDate = new Date(year, month, 1); // Start of the month
        const endDate = new Date(year, month + 1, 0); // End of the month

        const queries = ["completed", "ongoing", "unenrolled"].map(
          circleStatus =>
            this.getCountForCircleStatus(
              checkCompany?.id,
              circleStatus,
              startDate,
              endDate,
            ),
        );

        const results = await Promise.allSettled(queries);

        const totalCounts = results.map(result =>
          result.status === "fulfilled" ? result.value : 0,
        );

        return {
          month: monthNames[month],
          totalCompletedCircle: totalCounts[0],
          totalOngoingCircle: totalCounts[1],
          totalUnenrolledCircle: totalCounts[2],
        };
      }),
    );

    return {
      message: "Total company circles in 12 months",
      data: monthlyCounts,
    };
  }

  async getMemberCountByAgeRange(id: string) {
    const checkCompany = await this.prisma.companyUser.findUnique({
      where: {
        id: id,
      },
    });

    if (!checkCompany) {
      throw new BadRequestException(
        "Company not found. Please try again later",
      );
    }

    const members = await this.prisma.companyUser.findMany({
      where: {
        id: id,
      },
      include: {
        membersList: true,
      },
    });

    const ageRanges: { [key: string]: number } = {
      "18-24": 0,
      "25-34": 0,
      "35-44": 0,
      "45-64": 0,
      "65-over": 0,
    };

    // Calculate age range for each member and count them
    members.forEach(companyUser => {
      companyUser.membersList.forEach(member => {
        const age =
          new Date().getFullYear() - new Date(member.DOB).getFullYear();
        if (age >= 18 && age <= 24) {
          ageRanges["18-24"]++;
        } else if (age >= 25 && age <= 34) {
          ageRanges["25-34"]++;
        } else if (age >= 35 && age <= 44) {
          ageRanges["35-44"]++;
        } else if (age >= 45 && age <= 64) {
          ageRanges["45-64"]++;
        } else if (age >= 65) {
          ageRanges["65-over"]++;
        }
      });
    });

    // Format the result
    const result = Object.keys(ageRanges).map(key => ({
      ageRange: key,
      count: ageRanges[key],
    }));

    return {
      message: "Member count by age range",
      data: result,
    };
  }

  private async getCountForCircleStatus(
    id: string,
    circleStatus: string,
    startDate: Date,
    endDate: Date,
  ) {
    return this.prisma.companyCircles.count({
      where: {
        companyUserId: id,
        circleStatus: circleStatus as string as CircleStatus,
        created_at: {
          gte: startDate,
          lte: endDate,
        },
      },
    });
  }
}
