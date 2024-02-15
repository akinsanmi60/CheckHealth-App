import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from "@nestjs/common";
import { AssessmentService } from "./assessment.service";
import { ApiBearerAuth, ApiParam, ApiResponse, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "../../auth/jwtAuth.guard";
import { Role } from "../../roles/role.enum";
import { Roles } from "../../roles/roles.decorator";
import { RolesGuard } from "../../roles/roles.guard";
import { AdminPermissions } from "../../permissions/permission.enum";
import { Permission } from "../../permissions/premission.decorator";
import { GenericResponse } from "../../auth/dto/auth-response.dto";

@ApiTags("Assessment")
@ApiBearerAuth()
@Controller("assessment")
export class AssessmentController {
  constructor(private readonly assessmentService: AssessmentService) {}

  @Get("getLatestWeeklyAssessment")
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.admin, Role.superAdmin, Role.user)
  async getLatestWeeklyAssessment() {
    return await this.assessmentService.getLatestWeeklyAssessment();
  }

  @Get("getLatestDailyCheckinAssessment")
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.admin, Role.superAdmin, Role.user)
  async getLatestDailyCheckinAssessment() {
    return await this.assessmentService.getLatestDailyCheckinAssessment();
  }

  @Get("getAssessment/:id")
  @ApiParam({ name: "id", type: "string" })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.admin, Role.superAdmin)
  async getAssessmentById(@Param("id") id: string) {
    return await this.assessmentService.getAssessmentById(id);
  }

  @Post("createAssessment")
  @ApiParam({ name: "id", type: "string" })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.admin, Role.superAdmin)
  @Permission(AdminPermissions.CreateAssessment)
  @ApiResponse({
    type: GenericResponse,
  })
  async createAssessment(@Param("id") id: string, dto: any) {
    return await this.assessmentService.createAssessment(id, dto);
  }

  @Delete("deleteAssessment/:id")
  @ApiParam({ name: "id", type: "string" })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.admin, Role.superAdmin)
  @Permission(AdminPermissions.DeleteAssessment)
  @ApiResponse({
    type: GenericResponse,
  })
  async deleteAssessmentById(@Param("id") id: string) {
    return await this.assessmentService.deleteAssessmentById(id);
  }
}
