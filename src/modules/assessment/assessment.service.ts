import { BadRequestException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { v4 as uuidv4 } from "uuid";

@Injectable()
export class AssessmentService {
  private readonly timeGenerated: string;

  constructor(private readonly prisma: PrismaService) {
    this.timeGenerated = new Date().toISOString();
  }

  async createAssessment(id: string, dto: any) {
    const { setNo, assessmentType, setQuestions } = dto;
    const assessmentCreator = await this.prisma.empyloUser.findUnique({
      where: {
        id: id,
      },
    });

    if (!assessmentCreator) {
      throw new BadRequestException("User not found");
    }

    let assessmentData = {};

    if (assessmentType === "weekly") {
      assessmentData = {
        id: uuidv4(),
        created_at: this.timeGenerated,
        setNo: setNo,
        assessmentType: assessmentType,
        empyloUser: {
          connect: {
            id: assessmentCreator.id,
          },
        },
        setQuestions: setQuestions,
      };
    } else {
      assessmentData = {
        id: uuidv4(),
        created_at: this.timeGenerated,
        setNo: setNo,
        assessmentType: assessmentType,
        empyloUserCheckin: {
          connect: {
            id: assessmentCreator.id,
          },
        },
        setQuestions: setQuestions,
      };
    }

    const assessment = await this.prisma.assessment.create({
      data: assessmentData,
    });

    if (!assessment) {
      throw new BadRequestException("Failed to create assessment");
    }

    return {
      message: "Assessment created successfully",
    };
  }

  async getLatestWeeklyAssessment() {
    const assessment = await this.prisma.assessment.findFirst({
      where: {
        assessmentType: "weekly",
      },
      orderBy: {
        created_at: "desc",
      },
    });

    if (!assessment) {
      return {
        message: "No weekly assessment found",
        data: null,
      };
    }

    const showAssessment = {
      id: assessment.id,
      created_at: assessment.created_at,
      setNo: assessment.setNo,
      assessmentType: assessment.assessmentType,
      setQuestions: assessment.setQuestions,
    };

    return {
      message: "Weekly assessment found",
      data: showAssessment,
    };
  }

  async getLatestDailyCheckinAssessment() {
    const assessment = await this.prisma.assessment.findFirst({
      where: {
        assessmentType: "dailyCheckin",
      },
      orderBy: {
        created_at: "desc",
      },
    });

    if (!assessment) {
      return {
        message: "No daily checkin assessment found",
        data: null,
      };
    }

    const showAssessment = {
      id: assessment.id,
      created_at: assessment.created_at,
      setNo: assessment.setNo,
      assessmentType: assessment.assessmentType,
      setQuestions: assessment.setQuestions,
    };

    return {
      message: "Daily checkin assessment found",
      data: showAssessment,
    };
  }

  async getAssessmentById(id: string) {
    const assessment = await this.prisma.assessment.findUnique({
      where: {
        id: id,
      },
      select: {
        empyloUser: {
          select: {
            id: true,
            firstName: true,
            empyloID: true,
            lastName: true,
            passportImg: true,
          },
        },
        empyloUserCheckin: {
          select: {
            id: true,
            firstName: true,
            empyloID: true,
            lastName: true,
            passportImg: true,
          },
        },
        assessmentType: true,
        created_at: true,
        setNo: true,
        setQuestions: true,
        id: true,
      },
    });

    if (!assessment) {
      throw new BadRequestException("Assessment not found");
    }

    let showAssessment = {};
    if (assessment.assessmentType === "dailyCheckin") {
      showAssessment = {
        id: assessment.id,
        created_at: assessment.created_at,
        setNo: assessment.setNo,
        assessmentType: assessment.assessmentType,
        setQuestions: assessment.setQuestions,
        empyloUser: assessment.empyloUserCheckin,
      };
    } else {
      showAssessment = {
        id: assessment.id,
        created_at: assessment.created_at,
        setNo: assessment.setNo,
        assessmentType: assessment.assessmentType,
        setQuestions: assessment.setQuestions,
        empyloUser: assessment.empyloUser,
      };
    }

    return {
      message: "Assessment found",
      data: showAssessment,
    };
  }

  async deleteAssessmentById(id: string) {
    const assessment = await this.prisma.assessment.delete({
      where: {
        id: id,
      },
    });

    if (!assessment) {
      throw new BadRequestException("Assessment not found");
    }

    return {
      message: "Assessment deleted successfully",
    };
  }

  async getAllAssessment(dto: any) {
    const { created_at, page = 1, limit = 10, id } = dto;
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

    const [allAssessments, totalCount] = await Promise.all([
      this.prisma.assessment.findMany({
        where,
        select: {
          id: true,
          created_at: true,
          setNo: true,
          assessmentType: true,
          setQuestions: true,
          empyloUser: {
            select: {
              id: true,
              firstName: true,
              empyloID: true,
              lastName: true,
              passportImg: true,
            },
          },
          empyloUserCheckin: {
            select: {
              id: true,
              firstName: true,
              empyloID: true,
              lastName: true,
              passportImg: true,
            },
          },
        },
        skip: skip,
        take: offset,
        orderBy: {
          created_at: "desc",
        },
      }),
      this.prisma.assessment.count({
        where: where,
      }),
    ]);

    const totalPages = Math.ceil(totalCount / limitNumber);

    const message = allAssessments.length
      ? "Assessments fetched successfully"
      : "No Assessments Found";
    const success = allAssessments?.length ? true : false;

    return {
      message,
      data: {
        total: success ? totalCount : 0,
        total_pages: success ? totalPages : 0,
        current_page: success ? Number(page) : 0,
        page_size: success ? offset : 0,
        assessments: success ? allAssessments : [],
      },
    };
  }
}
