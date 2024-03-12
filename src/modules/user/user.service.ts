import {
  BadRequestException,
  Injectable,
  UseInterceptors,
} from "@nestjs/common";
import { AuthResolver } from "src/auth/authFinder.service";
import { ResponseInterceptor } from "src/filter/responseFilter/respone.service";
// import { MailService } from "../../mail/mail.service";
import { PrismaService } from "src/prisma/prisma.service";
import { IListOfScore, UserCircle } from "src/types/appModel.type";
import { CompanyGettingStartedDto } from "../circles/dto/company.dto";
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
    // private readonly mailService: MailService,
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
      "userCircleName",
      "userCircle",
    )) as UserCircle;

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
      if (foundUsers.length !== participantsList.length) {
        const notFoundEmails = participantsList.filter(
          email => !foundUsers.map(user => user.email).includes(email),
        );
        throw new BadRequestException(
          `One or more participants not found: ${notFoundEmails.join(", ")}`,
        );
      }

      const circleCreated = await this.prisma.userCircles.create({
        data: {
          id: uuidv4(),
          circleImg: file.filename,
          userCircleName: dto.circleName,
          userCircleDescription: dto.circleDescription,
          userCircleNos: circleGeneratedNos,
          userCircleShareLink: inviteUrl,
          user: {
            connect: { id: id },
          },
          memberList: {
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
        this.prisma.userCircles.count({
          where,
        }),
      ]);

      if (!allUserCircles) {
        throw new BadRequestException("User circles not found");
      }

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
          userCircle_list: allUserCircles,
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
                userCirleID: true,
                weeklyScore: true,
                dailyScore: true,
                ownerID: true,
                wellbeingScore: true,
              },
            },
          },
          orderBy: { created_at: "desc" },
        },
      },
    });

    if (!userCircle) {
      throw new BadRequestException("User circle not found");
    }

    const currentDate = new Date();

    const startOfCurrentWeek = new Date(
      currentDate.setDate(currentDate.getDate() - currentDate.getDay()),
    ); // Move back to Sunday

    const endOfCurrentWeek = new Date(
      currentDate.setDate(currentDate.getDate() + 6),
    ); // Add 6 days to get Saturday

    const listOfScore = userCircle.memberList.flatMap(member =>
      member.listOfScoreDetail.filter(score => {
        const createdAtDate = new Date(score.created_at);
        return (
          createdAtDate > startOfCurrentWeek && createdAtDate < endOfCurrentWeek
        );
      }),
    );

    const reshapeDataDueToScore = userCircle.memberList.map(member => {
      return {
        ...member,
        listOfScoreDetail: listOfScore.filter(
          score => score.userCirleID === id && score.ownerID === member.id,
        ),
      };
    });

    return {
      message: "User circle fetched successfully",
      data: reshapeDataDueToScore,
    };
  }

  async getMyScoreInCompanyCircle(id: string, coyCircleId: string) {
    const [companyCircle, checkUser] = await Promise.all([
      this.prisma.companyCircles.findUnique({
        where: {
          id: coyCircleId,
        },
        select: {
          memberList: {
            select: {
              id: true,
              passportImg: true,
              listOfScoreDetail: {
                select: {
                  created_at: true,
                  coyCirleID: true,
                  userCirleID: true,
                  weeklyScore: true,
                  dailyScore: true,
                  ownerID: true,
                  wellbeingScore: true,
                },
              },
            },
          },
        },
      }),
      this.prisma.user.findUnique({
        where: {
          id: id,
        },
      }),
    ]);

    if (!companyCircle) {
      throw new BadRequestException("Company circle not found");
    }

    if (companyCircle.memberList.length === 0) {
      throw new BadRequestException("Member list not found");
    }

    if (!checkUser) {
      throw new BadRequestException("User not found");
    }

    const { startOfCurrentWeek, endOfCurrentWeek } =
      this.analysisOfDateNeeded();

    const findFirstScoreCreated = await this.prisma.scoreDetail.findFirst({
      where: {
        coyCirleID: coyCircleId,
        ownerID: id,
        created_at: {
          gte: startOfCurrentWeek,
          lte: endOfCurrentWeek,
        },
      },
      orderBy: {
        created_at: "asc",
      },
    });

    const memberScores = companyCircle.memberList.map(member => {
      const { weeklyScore, averageDailyScore, wellbeingScore } =
        this.userScoreDetail(member?.listOfScoreDetail, id, coyCircleId);

      this.prisma.scoreDetail.update({
        where: {
          id: findFirstScoreCreated?.id,
          ownerID: member?.id,
        },
        data: {
          wellbeingScore: wellbeingScore,
        },
      });

      return {
        id: member?.id,
        passportImg: member?.passportImg,
        weeklyScore,
        averageDailyScore,
        wellbeingScore,
      };
    });

    return {
      message: "User score fetched successfully",
      data: memberScores?.length > 0 ? memberScores : [],
    };
  }
  async getMyScoreInUserCircle(id: string, userCircleId: string) {
    const [userCircle, checkUser] = await Promise.all([
      this.prisma.userCircles.findUnique({
        where: {
          id: userCircleId,
        },
        select: {
          memberList: {
            select: {
              id: true,
              passportImg: true,
              listOfScoreDetail: {
                select: {
                  created_at: true,
                  userCirleID: true,
                  weeklyScore: true,
                  dailyScore: true,
                  coyCirleID: true,
                  ownerID: true,
                  wellbeingScore: true,
                },
              },
            },
          },
        },
      }),
      this.prisma.user.findUnique({
        where: {
          id: id,
        },
      }),
    ]);

    if (!userCircle) {
      throw new BadRequestException("User circle not found");
    }

    if (userCircle.memberList.length === 0) {
      throw new BadRequestException("Member list not found");
    }

    if (!checkUser) {
      throw new BadRequestException("User not found");
    }

    const { startOfCurrentWeek, endOfCurrentWeek } =
      this.analysisOfDateNeeded();

    const findFirstScoreCreated = await this.prisma.scoreDetail.findFirst({
      where: {
        userCirleID: userCircleId,
        ownerID: id,
        created_at: {
          gte: startOfCurrentWeek,
          lte: endOfCurrentWeek,
        },
      },
      orderBy: {
        created_at: "asc",
      },
    });

    const memberScores = userCircle.memberList.map(member => {
      const { weeklyScore, averageDailyScore, wellbeingScore } =
        this.userScoreDetail(member?.listOfScoreDetail, id, userCircleId);

      this.prisma.scoreDetail.update({
        where: {
          id: findFirstScoreCreated?.id,
          ownerID: member?.id,
        },
        data: {
          wellbeingScore: wellbeingScore,
        },
      });

      return {
        id: member?.id,
        passportImg: member?.passportImg,
        weeklyScore,
        averageDailyScore,
        wellbeingScore,
      };
    });

    return {
      message: "User score fetched successfully",
      data: memberScores?.length > 0 ? memberScores : [],
    };
  }

  async activateUserCircle(id: string) {
    const findCircle = await this.prisma.userCircles.findUnique({
      where: {
        id: id,
      },
    });

    if (!findCircle) {
      throw new BadRequestException("User circle not found");
    }

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
    const findCircle = await this.prisma.userCircles.findUnique({
      where: {
        id: id,
      },
    });

    if (!findCircle) {
      throw new BadRequestException("User circle not found");
    }
    const data = {
      coyCircleStatus: "inactive",
      updated_at: this.timeGenerated,
    };

    const deactivatedCircle = (await this.authResolver.findAndUpdateCircleField(
      data,
      "userCircle",
      "id",
      findCircle?.id,
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

  async leaveUserCircle(id: string, circleNos) {
    try {
      const [findCirlceWithCircleNos, findCoyWithCircleNos] = await Promise.all(
        [
          this.prisma.userCircles.update({
            where: { userCircleNos: circleNos },
            data: { memberList: { disconnect: { id: id } } },
          }),
          this.prisma.companyCircles.update({
            where: { coyCircleNos: circleNos },
            data: { memberList: { disconnect: { id: id } } },
          }),
        ],
      );

      if (!findCirlceWithCircleNos || !findCoyWithCircleNos) {
        throw new BadRequestException(
          `Failed to remove you from company circle ${findCirlceWithCircleNos?.userCircleNos || findCoyWithCircleNos?.coyCircleNos}`,
        );
      }

      const switchData = () => {
        if (findCirlceWithCircleNos) {
          return {
            userCircles: {
              delete: {
                userCircleNos: findCirlceWithCircleNos.userCircleNos,
              },
            },
          };
        } else {
          return {
            coyCirclesList: {
              delete: { coyCircleNos: findCoyWithCircleNos.coyCircleNos },
            },
          };
        }
      };

      const disconnectFromUser = await this.prisma.user.update({
        where: { id: id },
        data: switchData(),
      });

      if (!disconnectFromUser) {
        throw new BadRequestException(
          `Failed to remove you from company circle ${findCirlceWithCircleNos?.userCircleName || findCoyWithCircleNos?.coyCircleName}`,
        );
      }

      return {
        message: `Successfully removed you from company circle ${findCirlceWithCircleNos?.userCircleName || findCoyWithCircleNos?.coyCircleName}`,
      };
    } catch (error) {
      console.error("Error in leave user circle:", error);
      throw error || new Error("Failed to leave user circle");
    }
  }

  async deleteUserCircle(id: string) {
    const userCircleCheck = await this.prisma.userCircles.findUnique({
      where: { id: id },
    });

    if (!userCircleCheck) {
      throw new BadRequestException("User circle not found");
    }

    const userCircle = await this.prisma.userCircles.delete({
      where: { id },
    });

    if (!userCircle) {
      throw new BadRequestException(
        "Failed to delete user circle. Please try again later",
      );
    }

    return {
      message: "User circle deleted successfully",
    };
  }

  async removeMemberFromCircle(id: string, memberId: string) {
    const findCircle = await this.prisma.userCircles.findUnique({
      where: {
        id: id,
      },
    });

    if (!findCircle) {
      throw new BadRequestException("User circle not found");
    }
    const removedMember = await this.prisma.userCircles.update({
      where: {
        id: id,
      },
      data: {
        memberList: {
          disconnect: {
            id: memberId,
          },
        },
      },
    });

    if (!removedMember) {
      throw new BadRequestException(
        "Failed to remove member from user circle. Please try again later",
      );
    }

    if (removedMember) {
      return {
        message: "Member removed successfully",
      };
    }
  }

  async addMemberViaURLToCircle(id: string, inviteUrl: string) {
    const foundUser = await this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    if (!foundUser) {
      throw new BadRequestException("User not found. Please try again later");
    }

    const findCircle = await this.prisma.userCircles.findUnique({
      where: {
        userCircleShareLink: inviteUrl,
      },
    });

    if (!findCircle) {
      throw new BadRequestException("Circle with invite URL not found.");
    }

    const memberInCircle = await this.prisma.userCircles.update({
      where: {
        userCircleShareLink: inviteUrl,
      },
      data: {
        memberList: {
          connect: {
            id: foundUser?.id,
          },
        },
      },
    });

    if (!memberInCircle) {
      throw new BadRequestException("Failed to add member to user circle.");
    }

    if (memberInCircle) {
      return {
        message: "Member added successfully",
      };
    }
  }

  async getUsersByCountry(): Promise<
    { country: string; totalUsers: number }[]
  > {
    const users = await this.prisma.user.findMany({
      select: {
        country: true,
      },
    });

    const usersByCountry: { [key: string]: number } = users.reduce(
      (acc, user) => {
        if (user.country in acc) {
          acc[user.country]++;
        } else {
          acc[user.country] = 1;
        }
        return acc;
      },
      {},
    );

    const sortedUsersByCountry = Object.entries(usersByCountry)
      .map(([country, totalUsers]) => ({ country, totalUsers }))
      .sort((a, b) => b.totalUsers - a.totalUsers);

    return sortedUsersByCountry;
  }

  async getUsersByCountryAndPeriod(period: string) {
    const users = await this.prisma.user.findMany({
      where: {
        created_at: {
          gte: new Date(
            new Date().getTime() - Number(period) * 24 * 60 * 60 * 1000,
          ),
        },
      },
      orderBy: {
        country: "asc",
      },
    });

    // Ensure users is of the correct type (array of objects)
    if (!Array.isArray(users)) {
      throw new Error("Unexpected type for users");
    }

    // Explicitly type users as an array of user objects
    const typedUsers: { country: string }[] = users;

    // Group users by country
    const usersByCountry = typedUsers.reduce((acc, user) => {
      acc[user.country] = acc[user.country] || [];
      acc[user.country].push(user);
      return acc;
    }, {});

    // Calculate total users by country
    const countryTotals = Object.entries(usersByCountry)
      .map(([country, userHome]: [string, { country: string }[]]) => ({
        country,
        totalUsers: userHome.length,
      }))
      .sort((a, b) => b.totalUsers - a.totalUsers);

    return {
      message: "Total Various Users Categories",
      data: countryTotals,
    };
  }

  async getTotalVariousUsersCategories() {
    const [users, activeUsers, personalUsers, clientUsers, inactiveUsers] =
      await Promise.all([
        this.prisma.user.findMany({}),
        this.prisma.user.findMany({
          where: {
            status: "active",
          },
        }),
        this.prisma.user.findMany({
          where: {
            accountType: "personalUser",
          },
        }),

        this.prisma.user.findMany({
          where: {
            accountType: "clientUser",
          },
        }),

        this.prisma.user.findMany({
          where: {
            status: "inactive",
          },
        }),
      ]);

    return {
      message: "Total Various Users Categories",
      data: {
        totalUsers: users.length,
        activeUsers: activeUsers.length,
        personalUsers: personalUsers.length,
        clientUsers: clientUsers.length,
        inactiveUsers: inactiveUsers.length,
      },
    };
  }

  async getUsersGender() {
    const [maleUsers, femaleUsers, otherUsers] = await Promise.all([
      this.prisma.user.count({
        where: {
          gender: "male",
        },
      }),
      this.prisma.user.count({
        where: {
          gender: "female",
        },
      }),
      this.prisma.user.count({
        where: {
          gender: "other",
        },
      }),
    ]);

    return {
      message: "Users Gender",
      data: {
        maleUsers: maleUsers,
        femaleUsers: femaleUsers,
        otherUsers: otherUsers,
      },
    };
  }

  async getUsersByAgeRange(id: string) {
    const checkEmpyloUser = await this.prisma.empyloUser.findUnique({
      where: {
        id: id,
      },
    });

    if (!checkEmpyloUser) {
      throw new BadRequestException(
        "Admin user not found. Please try again later",
      );
    }

    const users = await this.prisma.user.findMany({});

    const ageRanges: { [key: string]: number } = {
      "18-24": 0,
      "25-34": 0,
      "35-44": 0,
      "45-64": 0,
      "65-over": 0,
    };

    // Calculate age range for each user and count them
    users.forEach(user => {
      const age = new Date().getFullYear() - new Date(user.DOB).getFullYear();
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

    // Format the result
    const result = Object.keys(ageRanges).map(key => ({
      ageRange: key,
      count: ageRanges[key],
    }));

    return {
      message: "Users count by age range",
      data: result,
    };
  }

  async getMemberDepartmentCount(id: string) {
    console.log(id);
    const checkCompany = await this.prisma.empyloUser.findUnique({
      where: {
        id: id,
      },
    });

    if (!checkCompany) {
      throw new BadRequestException(
        "Company not found. Please try again later",
      );
    }

    const users = await this.prisma.user.findMany({
      select: {
        department: true,
      },
    });

    const departmentCounts = {
      Marketing: 0,
      Finance: 0,
      Operations: 0,
      "Human Resource": 0,
      IT: 0,
      "Customer Service": 0,
      Legal: 0,
      Product: 0,
      Other: 0,
    };

    users.forEach(member => {
      if (member?.department === "Marketing") {
        departmentCounts.Marketing++;
      } else if (member.department === "Finance") {
        departmentCounts.Finance++;
      } else if (member.department === "Operations") {
        departmentCounts.Operations++;
      } else if (member.department === "Human Resource") {
        departmentCounts["Human Resource"]++;
      } else if (member.department === "IT") {
        departmentCounts.IT++;
      } else if (member.department === "Customer Service") {
        departmentCounts["Customer Service"]++;
      } else if (member.department === "Legal") {
        departmentCounts.Legal++;
      } else if (member.department === "Product") {
        departmentCounts.Product++;
      } else {
        departmentCounts.Other++;
      }
    });

    return {
      message: "users department count",
      data: departmentCounts,
    };
  }

  private userScoreDetail(
    listOfScore: IListOfScore,
    id: string,
    coyCircleId: string,
  ) {
    const { startOfCurrentWeek, endOfCurrentWeek } =
      this.analysisOfDateNeeded();

    const currentWeekListOfScore = listOfScore.filter(score => {
      const createdAtDate = new Date(score?.created_at);
      return (
        createdAtDate > startOfCurrentWeek && createdAtDate < endOfCurrentWeek
      );
    });

    const scoreArray = currentWeekListOfScore.filter(score => {
      if (score?.coyCirleID !== "" || score?.coyCirleID !== null) {
        return score?.coyCirleID === coyCircleId && score?.ownerID === id;
      } else if (score?.userCirleID !== "" || score?.userCirleID !== null) {
        return score?.userCirleID === coyCircleId && score?.ownerID === id;
      }
    });

    const weekScore = scoreArray?.map(score => score?.weeklyScore);
    const dailyScore = scoreArray?.map(score => score?.dailyScore);

    const removeFirstDayDailyScore = dailyScore?.slice(1);

    const averageDailyScore =
      dailyScore.reduce((a, b) => a + b, 0) / removeFirstDayDailyScore?.length;

    const daily = averageDailyScore ? averageDailyScore * 1.8 : 0;

    const updateWellbeingScore = weekScore[0] / 2.2 + daily;

    return {
      weeklyScore: weekScore[0] as number,
      averageDailyScore: daily,
      wellbeingScore: updateWellbeingScore,
    };
  }

  private analysisOfDateNeeded() {
    const currentDate = new Date();

    const startOfCurrentWeek = new Date(
      currentDate.setDate(currentDate.getDate() - currentDate.getDay()),
    ); // Move back to Sunday

    const endOfCurrentWeek = new Date(
      currentDate.setDate(currentDate.getDate() + 6),
    ); // Add 6 days to get Saturday

    return { startOfCurrentWeek, endOfCurrentWeek };
  }
}
