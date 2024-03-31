import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from "@nestjs/common";
import {
  ApiTags,
  ApiBearerAuth,
  ApiParam,
  ApiBody,
  ApiResponse,
  ApiQuery,
  ApiConsumes,
} from "@nestjs/swagger";
import { CirclesService } from "./company-circles.service";
import { FileInterceptor } from "@nestjs/platform-express";
import { Express } from "express";
import { fileMimetypeFilter } from "../../filter/file-mimetype/file--mimetype-filter";
import { MAX_IMAGE_SIZE } from "../../filter/file-mimetype/file-config";
import {
  AddMemberToCircleDto,
  CompanyGettingStartedDto,
  GetAllCirclesDto,
} from "./dto/company.dto";
import { GenericResponse } from "src/auth/dto/auth-response.dto";
import {
  IGetAllCompanyCircle,
  IGetCompanyCircle,
  IGetCoyCirlceTotalByCategory,
  IGetTotalCircleInMonth,
  IGetTotalCircleInYearWithMonth,
} from "./dto/company-response.dto";
import { JwtAuthGuard } from "../../auth/jwtAuth.guard";
import { Role } from "../../roles/role.enum";
import { Roles } from "../../roles/roles.decorator";
import { RolesGuard } from "../../roles/roles.guard";
import {
  IGetUserRange,
  IGetusersTotalByDeparment,
} from "../user/dto/usercircle-response.dto";

@ApiTags("Company")
@ApiBearerAuth()
@Controller("company")
export class CirclesController {
  constructor(private readonly circlesService: CirclesService) {}

  @Post("/:id/create-circle")
  @UseInterceptors(
    FileInterceptor("file", {
      fileFilter: fileMimetypeFilter(["image/jpeg", "image/png", "image/jpg"]),
      limits: { fileSize: MAX_IMAGE_SIZE },
    }),
  )
  @ApiParam({ name: "id", type: "string" })
  @ApiBody({
    type: CompanyGettingStartedDto,
    description:
      "Creating a circle for a company. Note append the file to the formData when posting",
  })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles([Role.company])
  createCirlce(
    @UploadedFile() file: Express.Multer.File,
    @Body() dto,
    @Param("id") id: string,
  ) {
    return this.circlesService.createCirlce(dto, id, file);
  }

  @Post("/:id/remove-member/:userId")
  @ApiParam({ name: "id", type: "string" })
  @ApiParam({ name: "userId", type: "string" })
  @ApiResponse({
    type: GenericResponse,
  })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles([Role.company])
  removeMember(@Param("id") id: string, @Param("userId") userId: string) {
    return this.circlesService.removeUserFromMembersList(id, userId);
  }

  @Post("/:id/deactivate/comapny-circle")
  @ApiParam({ name: "id", type: "string" })
  @ApiResponse({
    type: GenericResponse,
    description: "Deactivating a company circle",
  })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles([Role.company])
  deactivateCompanyCircle(@Param("id") id: string) {
    return this.circlesService.deactivateCompanyCircle(id);
  }

  @Post("/:id/activate/comapny-circle")
  @ApiParam({ name: "id", type: "string" })
  @ApiResponse({
    type: GenericResponse,
    description: "Activating a company circle",
  })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles([Role.company])
  activateCompanyCircle(@Param("id") id: string) {
    return this.circlesService.activateCompanyCircle(id);
  }

  @Get("/:id/get-company-circle")
  @ApiParam({ name: "id", type: "string" })
  @ApiResponse({
    type: IGetCompanyCircle,
    description: "Get a company circle",
  })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles([Role.company])
  getCompanyCircleById(@Param("id") id: string) {
    return this.circlesService.getCompanyCircleById(id);
  }

  @Get("/allcompany-circles")
  @ApiResponse({
    type: IGetAllCompanyCircle,
  })
  @ApiQuery({
    type: GetAllCirclesDto,
  })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles([Role.company])
  getAllCompanyCircles(@Query() dto) {
    return this.circlesService.getAllCompanyCircles(dto);
  }

  @Delete("/:id/delete-company-circle")
  @ApiParam({ name: "id", type: "string" })
  @ApiResponse({
    type: GenericResponse,
  })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles([Role.company])
  deleteCompanyCircle(@Param("id") id: string) {
    return this.circlesService.deleteCompanyCircle(id);
  }

  @Post("/:id/addmember-company-circle")
  @ApiParam({ name: "id", type: "string" })
  @ApiResponse({
    type: GenericResponse,
  })
  @ApiBody({
    type: AddMemberToCircleDto,
  })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles([Role.company])
  addMemberToCircle(@Param("id") id: string, @Body() dto) {
    return this.circlesService.addMemberToCircle(id, dto);
  }

  @Post("/:id/:memberId/removemember-company-circle")
  @ApiParam({ name: "id", type: "string" })
  @ApiParam({ name: "memberId", type: "string" })
  @ApiResponse({
    type: GenericResponse,
  })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles([Role.company])
  removeMemberFromCircle(
    @Param("id") id: string,
    @Param("memberId") memberId: string,
  ) {
    return this.circlesService.removeMemberFromCircle(id, memberId);
  }

  @Post("/:inviteUrl/:id/join-company-circle")
  @ApiParam({ name: "id", type: "string" })
  @ApiParam({ name: "inviteUrl", type: "string" })
  @ApiResponse({
    type: GenericResponse,
  })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles([Role.company, Role.user])
  joinCompanyCircle(@Param("id") id, @Param("inviteUrl") inviteUrl) {
    return this.circlesService.addMemberViaURLToCircle(id, inviteUrl);
  }

  @Post("/:id/batchupload-member")
  @UseInterceptors(
    FileInterceptor("file", {
      fileFilter: fileMimetypeFilter([
        "csv",
        "text/csv",
        "application/vnd.ms-excel",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      ]),
      limits: { fileSize: MAX_IMAGE_SIZE },
    }),
  )
  @ApiConsumes("multipart/form-data")
  @ApiParam({ name: "id", type: "string" })
  @ApiBody({
    description:
      "Creating a circle for a company. Note append the file to the formData when posting",
    schema: {
      type: "object",
      properties: {
        file: {
          // 👈 this property
          type: "string",
          format: "binary",
        },
      },
    },
  })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles([Role.company])
  @ApiResponse({
    type: GenericResponse,
  })
  batchUploadMember(
    @UploadedFile() file: Express.Multer.File,
    @Param("id") id: string,
  ) {
    return this.circlesService.memberBatchUploadCircles(id, file);
  }

  @Get("/total-cirlce-category")
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles([Role.company, Role.superAdmin, Role.admin])
  @ApiResponse({
    type: IGetCoyCirlceTotalByCategory,
  })
  @ApiParam({ name: "id", type: "string", description: "use company id" })
  getTotalUsersPerCompany(@Param("id") id: string) {
    return this.circlesService.getTotalCompanyCirclesCategory(id);
  }

  @Get("/:id/total-circles-per-month/:year")
  @ApiParam({ name: "id", type: "string", description: "use company id" })
  @ApiParam({ name: "year", type: "string", description: "use year" })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles([Role.company, Role.superAdmin, Role.admin])
  @ApiResponse({
    type: IGetTotalCircleInMonth,
  })
  getTotalCirclesPerMonthInYear(@Param("id") id, @Param("year") year) {
    return this.circlesService.getTotalCirclesPerMonthInYear(
      id,
      parseInt(year),
    );
  }
  @Get("/:id/circles-per-month/:year")
  @ApiParam({ name: "id", type: "string", description: "use company id" })
  @ApiParam({ name: "year", type: "string", description: "use year" })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles([Role.company, Role.superAdmin, Role.admin])
  @ApiResponse({
    type: IGetTotalCircleInYearWithMonth,
  })
  getTotalCirclesPerMonth(@Param("id") id, @Param("year") year) {
    return this.circlesService.getTotalCompanyCirclesPerMonth(
      id,
      parseInt(year),
    );
  }

  @Get("/:id/members-age-range")
  @ApiParam({ name: "id", type: "string", description: "use company id" })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles([Role.company, Role.superAdmin, Role.admin])
  @ApiResponse({
    type: IGetUserRange,
  })
  getMembersAgeRange(@Param("id") id) {
    return this.circlesService.getMemberCountByAgeRange(id);
  }

  @Get("/:id/members-gender-count")
  @ApiParam({ name: "id", type: "string", description: "use company id" })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles([Role.company, Role.superAdmin, Role.admin])
  @ApiResponse({
    type: IGetUserRange,
  })
  getMembersGenderCount(@Param("id") id) {
    return this.circlesService.getMemberGenderCount(id);
  }

  @Get("/:id/members-departments-count")
  @ApiParam({ name: "id", type: "string", description: "use company id" })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles([Role.company, Role.superAdmin, Role.admin])
  @ApiResponse({
    type: IGetusersTotalByDeparment,
  })
  getDepartments(@Param("id") id) {
    return this.circlesService.getMemberDepartmentCount(id);
  }
}
