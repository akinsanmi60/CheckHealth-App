import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  UseGuards,
} from "@nestjs/common";
import { AssessmentService } from "./assessment.service";
import {
  ApiBearerAuth,
  ApiBody,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from "@nestjs/swagger";
import { JwtAuthGuard } from "../../auth/jwtAuth.guard";
import { Role } from "../../roles/role.enum";
import { Roles } from "../../roles/roles.decorator";
import { RolesGuard } from "../../roles/roles.guard";
import { AdminPermissions } from "../../permissions/permission.enum";
import { Permission } from "../../permissions/premission.decorator";
import { GenericResponse } from "../../auth/dto/auth-response.dto";
import { CalculateDto, CreateAssessmentDto } from "./dto/assessment.dto";
import {
  AllAssessmentResponseDto,
  AssessmentResponseDto,
  GetAllAssessmentDto,
} from "./dto/assessment-response.dto";

@ApiTags("Assessment")
@ApiBearerAuth()
@Controller("assessment")
export class AssessmentController {
  constructor(private readonly assessmentService: AssessmentService) {}

  @Get("getLatestWeeklyAssessment")
  // @UseGuards(JwtAuthGuard, RolesGuard)
  // @Roles(Role.admin, Role.superAdmin, Role.user)
  @ApiResponse({
    type: AssessmentResponseDto,
  })
  async getLatestWeeklyAssessment() {
    return await this.assessmentService.getLatestWeeklyAssessment();
  }

  @Get("getLatestDailyCheckinAssessment")
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles([Role.admin, Role.superAdmin, Role.user])
  @ApiResponse({
    type: AssessmentResponseDto,
  })
  async getLatestDailyCheckinAssessment() {
    return await this.assessmentService.getLatestDailyCheckinAssessment();
  }

  @Get("getAssessment/:id")
  @ApiParam({ name: "id", type: "string" })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles([Role.admin, Role.superAdmin])
  @ApiBody({ type: CreateAssessmentDto })
  @ApiResponse({
    type: AssessmentResponseDto,
  })
  async getAssessmentById(@Param("id") id: string) {
    return await this.assessmentService.getAssessmentById(id);
  }

  @Get("getAllAssessment")
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles([Role.admin, Role.superAdmin])
  @ApiResponse({
    type: AllAssessmentResponseDto,
  })
  @ApiQuery({
    type: GetAllAssessmentDto,
  })
  async getAllAssessment(@Query() dto) {
    return await this.assessmentService.getAllAssessment(dto);
  }

  @Post("/:id/createAssessment")
  @ApiParam({ name: "id", type: "string" })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles([Role.admin, Role.superAdmin])
  @Permission([AdminPermissions.CreateAssessment])
  @ApiResponse({
    type: GenericResponse,
  })
  @ApiBody({ type: CreateAssessmentDto })
  async createAssessment(@Param("id") id: string, dto) {
    return await this.assessmentService.createAssessment(id, dto);
  }

  @Delete("deleteAssessment/:id")
  @ApiParam({ name: "id", type: "string" })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles([Role.admin, Role.superAdmin])
  @Permission([AdminPermissions.DeleteAssessment])
  @ApiResponse({
    type: GenericResponse,
  })
  async deleteAssessmentById(@Param("id") id: string) {
    return await this.assessmentService.deleteAssessmentById(id);
  }

  @Post("/:userId/calculateWeeklyAssessment/:assessmentId")
  @ApiParam({ name: "userId", type: "string" })
  @ApiParam({ name: "assessmentId", type: "string" })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles([Role.user])
  @ApiResponse({
    type: GenericResponse,
  })
  @ApiBody({ type: CalculateDto })
  async calculateAssessment(@Body() dto) {
    return await this.assessmentService.weeklyAssessmentCalculate(
      dto.userId,
      dto.assessmentId,
      dto,
    );
  }

  @Post("/:userId/calculateDailyAssessment/:assessmentId")
  @ApiParam({ name: "userId", type: "string" })
  @ApiParam({ name: "assessmentId", type: "string" })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles([Role.user])
  @ApiResponse({
    type: GenericResponse,
  })
  @ApiBody({ type: CalculateDto })
  async calculateDailyAssessment(@Body() dto) {
    return await this.assessmentService.dailyCheckinkAssessmentCalculate(
      dto.userId,
      dto.assessmentId,
      dto,
    );
  }
}
