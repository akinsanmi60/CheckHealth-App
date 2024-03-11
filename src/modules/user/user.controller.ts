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
import { UserService } from "./user.service";
import {
  ApiBearerAuth,
  ApiBody,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from "@nestjs/swagger";
import { FileInterceptor } from "@nestjs/platform-express";
import { fileMimetypeFilter } from "../../filter/file-mimetype/file--mimetype-filter";
import { MAX_IMAGE_SIZE } from "../../filter/file-mimetype/file-config";
import {
  CreatingCircleStartedDto,
  GetAllUserCirclesDto,
  MemberToLeaveCircleDto,
} from "./dto/usercircle.dto";
import {
  IGetAllUserCircle,
  IGetImemberScore,
  IGetUserCircle,
  IGetUserRange,
  IGetusersTotalByCategory,
  IGetusersTotalByGender,
  IGetusersTotalByPeriod,
} from "./dto/usercircle-response.dto";
import { GenericResponse } from "src/auth/dto/auth-response.dto";

import { JwtAuthGuard } from "../../auth/jwtAuth.guard";
import { Role } from "../../roles/role.enum";
import { Roles } from "../../roles/roles.decorator";
import { RolesGuard } from "../../roles/roles.guard";
import { ResponseInterceptor } from "../../filter/responseFilter/respone.service";

@Controller("user")
@ApiTags("User")
@ApiBearerAuth()
@UseInterceptors(ResponseInterceptor)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post("/:id/create-circle")
  @UseInterceptors(
    FileInterceptor("file", {
      fileFilter: fileMimetypeFilter(["image/jpeg", "image/png", "image/jpg"]),
      limits: { fileSize: MAX_IMAGE_SIZE },
    }),
  )
  @ApiParam({ name: "id", type: "string" })
  @ApiBody({
    type: CreatingCircleStartedDto,
    description:
      "Creating a circle for a user. Note append the file to the formData when posting",
  })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles([Role.user])
  createCirlce(
    @UploadedFile() file: Express.Multer.File,
    @Body() dto,
    @Param("id") id: string,
  ) {
    return this.userService.createUserCirlce(dto, id, file);
  }

  @Get("/:id/get-user-circle")
  @ApiParam({ name: "id", type: "string" })
  @ApiResponse({
    type: IGetUserCircle,
    description: "Get a user circle",
  })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles([Role.user])
  getUserCircleById(@Param("id") id: string) {
    return this.userService.getUserCircleById(id);
  }

  @Get("my-score/:id/circleId/:coyCircleId")
  @ApiParam({ name: "id", type: "string" })
  @ApiParam({ name: "coyCircleId", type: "string" })
  @ApiResponse({
    type: IGetImemberScore,
  })
  @UseGuards(JwtAuthGuard, RolesGuard)
  getMyScoreInCoyCircle(
    @Param("id") id: string,
    @Param("coyCircleId") coyCircleId: string,
  ) {
    return this.userService.getMyScoreInCompanyCircle(id, coyCircleId);
  }
  @Get("my-score/:id/circleId/:userCircleId")
  @ApiParam({ name: "id", type: "string" })
  @ApiParam({ name: "userCircleId", type: "string" })
  @ApiResponse({
    type: IGetImemberScore,
  })
  @UseGuards(JwtAuthGuard, RolesGuard)
  getMyScoreInUserCircle(
    @Param("id") id: string,
    @Param("userCircleId") userCircleId: string,
  ) {
    return this.userService.getMyScoreInUserCircle(id, userCircleId);
  }

  @Get("/allusers-circles")
  @ApiResponse({
    type: IGetAllUserCircle,
  })
  @ApiQuery({
    type: GetAllUserCirclesDto,
  })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles([Role.user])
  getAllUserCircles(@Query() dto) {
    return this.userService.getAllUserCircles(dto);
  }

  @Post("/:id/activate/user-circle")
  @ApiParam({ name: "id", type: "string" })
  @ApiResponse({
    type: GenericResponse,
    description: "Activating a user circle",
  })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles([Role.user])
  activateUserCircle(@Param("id") id: string) {
    return this.userService.activateUserCircle(id);
  }

  @Post("/:id/deactivate/user-circle")
  @ApiParam({ name: "id", type: "string" })
  @ApiResponse({
    type: GenericResponse,
    description: "Deactivating auser circle",
  })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles([Role.user])
  deactivateUserCircle(@Param("id") id: string) {
    return this.userService.deactivateUserCircle(id);
  }

  @Delete("/:id/delete/user-circle")
  @ApiParam({ name: "id", type: "string" })
  @ApiResponse({
    type: GenericResponse,
  })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles([Role.user])
  deleteUserCircle(@Param("id") id: string) {
    return this.userService.deleteUserCircle(id);
  }

  @Post("/:id/user-leave/circle")
  @ApiParam({ name: "id", type: "string" })
  @ApiResponse({
    type: GenericResponse,
  })
  @ApiBody({ type: MemberToLeaveCircleDto })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles([Role.user])
  leaveUserCircle(@Param("id") id: string, @Body() dto: any) {
    return this.userService.leaveUserCircle(id, dto);
  }

  @Post("/:id/:memberId/removemember-from-circle")
  @ApiParam({ name: "id", type: "string" })
  @ApiParam({ name: "memberId", type: "string" })
  @ApiResponse({
    type: GenericResponse,
  })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles([Role.user])
  removeMemberFromCircle(
    @Param("id") id: string,
    @Param("memberId") memberId: string,
  ) {
    return this.userService.removeMemberFromCircle(id, memberId);
  }

  @Post("/:inviteUrl/:id/join-user-circle")
  @ApiParam({ name: "id", type: "string" })
  @ApiParam({ name: "inviteUrl", type: "string" })
  @ApiResponse({
    type: GenericResponse,
  })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles([Role.user])
  joinUserCircle(
    @Param("inviteUrl") inviteUrl: string,
    @Param("id") id: string,
  ) {
    return this.userService.addMemberViaURLToCircle(id, inviteUrl);
  }

  @Get("/:period/users-by-country")
  @ApiParam({ name: "period", type: "string" })
  @ApiResponse({
    type: IGetusersTotalByPeriod,
  })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles([Role.superAdmin, Role.admin])
  async getUsersByPeriod(@Param("period") period) {
    return this.userService.getUsersByCountryAndPeriod(period);
  }

  @Get("/total-various-users-categories")
  @ApiResponse({
    type: IGetusersTotalByCategory,
  })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles([Role.superAdmin, Role.admin])
  async getTotalVariousUsersCategories() {
    return this.userService.getTotalVariousUsersCategories();
  }

  @Get("/total-users-by-gender")
  @ApiResponse({
    type: IGetusersTotalByGender,
  })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles([Role.superAdmin, Role.admin])
  async getTotalUsersByGender() {
    return this.userService.getUsersGender();
  }

  @Get("/:id/users-age-range")
  @ApiParam({ name: "id", type: "string", description: "admin id" })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles([Role.superAdmin, Role.admin])
  @ApiResponse({
    type: IGetUserRange,
  })
  getMembersAgeRange(@Param("id") id) {
    return this.userService.getUsersByAgeRange(id);
  }
}
