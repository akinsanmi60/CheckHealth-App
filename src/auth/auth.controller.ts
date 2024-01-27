import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UseGuards,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import {
  ForgotPasswordDto,
  LoginDto,
  ResetPasswordDto,
  GettingStartedDto,
  GetAllUserDto,
  ChangePasswordDto,
  VerifyEmailDto,
} from "./dto/auth.dto";
import {
  ApiBearerAuth,
  ApiBody,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from "@nestjs/swagger";
import {
  GenericResponse,
  GetAllUserResponse,
  IGetIndividualUser,
  UserInfoDto,
} from "./dto/auth-response.dto";
import { JwtAuthGuard } from "./jwtAuth.guard";
import { RolesGuard } from "../roles/roles.guard";
import { Roles } from "../roles/roles.decorator";
import { Role } from "../roles/role.enum";

@ApiTags("Auth")
@ApiBearerAuth()
@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("signup")
  @ApiBody({ type: GettingStartedDto })
  @ApiResponse({ type: GenericResponse })
  gettingStarted(@Body() dto: GettingStartedDto) {
    return this.authService.userGettingStarted(dto);
  }

  @Post("/verify")
  @ApiBody({
    type: VerifyEmailDto,
  })
  @ApiResponse({
    type: GenericResponse,
  })
  accountVerify(@Body() dto) {
    return this.authService.verifyAccount(dto);
  }

  @Post("change-password")
  @ApiBody({ type: ChangePasswordDto })
  @ApiResponse({ type: GenericResponse })
  @ApiParam({ name: "id", type: "string" })
  createPassword(@Param("id") id: string, @Body() dto: ChangePasswordDto) {
    return this.authService.changePassword(id, dto);
  }

  @Post("login")
  @ApiBody({ type: LoginDto })
  login(@Body() dto: LoginDto) {
    return this.authService.login(dto);
  }

  @Post("forgot-password")
  ForgotPassword(@Body() dto: ForgotPasswordDto) {
    return this.authService.forgotPassword(dto);
  }

  @Post("reset-password")
  resetPassword(@Body() dto: ResetPasswordDto) {
    return this.authService.resetPassword(dto);
  }

  @Post(":id/activate-user")
  @ApiParam({ name: "id", type: "string" })
  @ApiResponse({
    type: UserInfoDto,
  })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.admin)
  async activateUser(@Param("id") id: string) {
    return await this.authService.activateUser(id);
  }

  @Post(":id/deactivate-user")
  @ApiParam({ name: "id", type: "string" })
  @ApiResponse({
    type: UserInfoDto,
  })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.admin)
  async deactivateUser(@Param("id") id) {
    return await this.authService.deactivateUser(id);
  }

  @Get(":id")
  @ApiResponse({
    type: IGetIndividualUser,
  })
  @ApiParam({ name: "id", type: "string" })
  // @UseGuards(JwtAuthGuard, RolesGuard)
  // @Roles(Role.admin)
  async getUser(@Param("id") id) {
    return await this.authService.getUserById(id);
  }

  @Get("allusers")
  @ApiQuery({ type: GetAllUserDto, required: false })
  @ApiResponse({
    type: GetAllUserResponse,
  })
  // @UseGuards(JwtAuthGuard, RolesGuard)
  // @Roles(Role.admin)
  async getAllUsers(@Query() dto) {
    return await this.authService.getAllUsers(dto);
  }
}
