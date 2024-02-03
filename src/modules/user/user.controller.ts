import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common";
import { UserService } from "./user.service";
import {
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

@Controller("user")
@ApiTags("User")
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
  getAllUserCircles(@Query() dto) {
    return this.userService.getAllUserCircles(dto);
  }

  @Post("/:id/activate/user-circle")
  @ApiParam({ name: "id", type: "string" })
  @ApiResponse({
    type: GenericResponse,
    description: "Activating a user circle",
  })
  activateUserCircle(@Param("id") id: string) {
    return this.userService.activateUserCircle(id);
  }

  @Post("/:id/deactivate/user-circle")
  @ApiParam({ name: "id", type: "string" })
  @ApiResponse({
    type: GenericResponse,
    description: "Deactivating auser circle",
  })
  deactivateUserCircle(@Param("id") id: string) {
    return this.userService.deactivateUserCircle(id);
  }

  @Delete("/:id/delete/user-circle")
  @ApiParam({ name: "id", type: "string" })
  @ApiResponse({
    type: GenericResponse,
  })
  deleteCompanyCircle(@Param("id") id: string) {
    return this.userService.deleteUserCircle(id);
  }

  @Post("/:id/user-leave/circle")
  @ApiParam({ name: "id", type: "string" })
  @ApiResponse({
    type: GenericResponse,
  })
  @ApiBody({ type: MemberToLeaveCircleDto })
  leaveUserCircle(@Param("id") id: string, @Body() dto: any) {
    return this.userService.leaveUserCircle(id, dto);
  }
}
