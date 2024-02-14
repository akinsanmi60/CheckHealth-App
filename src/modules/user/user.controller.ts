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
  IGetUserCircle,
} from "./dto/usercircle-response.dto";
import { GenericResponse } from "src/auth/dto/auth-response.dto";

import { JwtAuthGuard } from "../../auth/jwtAuth.guard";
import { Role } from "../../roles/role.enum";
import { Roles } from "../../roles/roles.decorator";
import { RolesGuard } from "../../roles/roles.guard";

@Controller("user")
@ApiTags("User")
@ApiBearerAuth()
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
  @Roles(Role.user)
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
  getUserCircleById(@Param("id") id: string) {
    return this.userService.getUserCircleById(id);
  }

  @Get("/allusers-circles")
  @ApiResponse({
    type: IGetAllUserCircle,
  })
  @ApiQuery({
    type: GetAllUserCirclesDto,
  })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.user)
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
  @Roles(Role.user)
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
  @Roles(Role.user)
  deactivateUserCircle(@Param("id") id: string) {
    return this.userService.deactivateUserCircle(id);
  }

  @Delete("/:id/delete/user-circle")
  @ApiParam({ name: "id", type: "string" })
  @ApiResponse({
    type: GenericResponse,
  })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.user)
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
  @Roles(Role.user)
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
  @Roles(Role.user)
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
  @Roles(Role.user)
  joinUserCircle(
    @Param("inviteUrl") inviteUrl: string,
    @Param("id") id: string,
  ) {
    return this.userService.addMemberViaURLToCircle(id, inviteUrl);
  }
}
