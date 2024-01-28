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
  GetAllUserDto,
  ChangePasswordDto,
  VerifyEmailDto,
  GettingStartedUpdateProfileDto,
  UserGettingStartedDto,
  CompanyGettingStartedDto,
  GetAllCompanyDto,
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
  GetAllCompanyResponse,
  GetAllUserResponse,
  IGetCompanyUser,
  IGetIndividualUser,
  UserInfoDto,
} from "./dto/auth-response.dto";
import { JwtAuthGuard } from "./jwtAuth.guard";
import { RolesGuard } from "../roles/roles.guard";
import { Roles } from "../roles/roles.decorator";
import { Role } from "../roles/role.enum";
import { CompanyAuthService } from "./company.service";

@ApiTags("Auth")
@ApiBearerAuth()
@Controller("auth")
export class AuthController {
  constructor(
    private authService: AuthService,
    private companyService: CompanyAuthService,
  ) {}

  @Post("/user/signup")
  @ApiBody({ type: LoginDto })
  @ApiResponse({ type: GenericResponse })
  gettingStarted(@Body() dto: UserGettingStartedDto) {
    return this.authService.userGettingStarted(dto);
  }

  @Post("/:id/update-signup-profile")
  @ApiBody({ type: GettingStartedUpdateProfileDto })
  @ApiResponse({ type: GenericResponse })
  @ApiParam({ name: "id", type: "string" })
  updateProfile(@Param("id") id: string, @Body() dto) {
    return this.authService.userUpdateProfile(id, dto);
  }

  @Post("/user/verify")
  @ApiBody({
    type: VerifyEmailDto,
  })
  @ApiResponse({
    type: GenericResponse,
  })
  accountVerify(@Body() dto) {
    return this.authService.verifyAccount(dto);
  }

  @Post("/user/change-password")
  @ApiBody({ type: ChangePasswordDto })
  @ApiResponse({ type: GenericResponse })
  @ApiParam({ name: "id", type: "string" })
  createPassword(@Param("id") id: string, @Body() dto: ChangePasswordDto) {
    return this.authService.changePassword(id, dto);
  }

  @Post("/user/login")
  @ApiBody({ type: LoginDto })
  login(@Body() dto: LoginDto) {
    return this.authService.login(dto);
  }

  @Post("/user/forgot-password")
  ForgotPassword(@Body() dto: ForgotPasswordDto) {
    return this.authService.forgotPassword(dto);
  }

  @Post("/user/reset-password")
  resetPassword(@Body() dto: ResetPasswordDto) {
    return this.authService.resetPassword(dto);
  }

  @Post("/:id/activate-user")
  @ApiParam({ name: "id", type: "string" })
  @ApiResponse({
    type: UserInfoDto,
  })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.admin, Role.superAdmin)
  async activateUser(@Param("id") id: string) {
    return await this.authService.activateUser(id);
  }

  @Post("/:id/deactivate-user")
  @ApiParam({ name: "id", type: "string" })
  @ApiResponse({
    type: UserInfoDto,
  })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.admin, Role.superAdmin)
  async deactivateUser(@Param("id") id) {
    return await this.authService.deactivateUser(id);
  }

  @Get("/:id")
  @ApiResponse({
    type: IGetIndividualUser,
  })
  @ApiParam({ name: "id", type: "string" })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.admin, Role.superAdmin)
  async getUser(@Param("id") id) {
    return await this.authService.getUserById(id);
  }

  @Get("/allusers")
  @ApiQuery({ type: GetAllUserDto, required: false })
  @ApiResponse({
    type: GetAllUserResponse,
  })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.admin, Role.superAdmin)
  async getAllUsers(@Query() dto) {
    return await this.authService.getAllUsers(dto);
  }

  //Company starts here

  @Post("/company/signup")
  @ApiBody({ type: CompanyGettingStartedDto })
  @ApiResponse({ type: GenericResponse })
  companyGettingStarted(@Body() dto: CompanyGettingStartedDto) {
    return this.companyService.companyGettingStarted(dto);
  }

  @Post("/company/verify")
  @ApiBody({
    type: VerifyEmailDto,
  })
  @ApiResponse({
    type: GenericResponse,
  })
  companyAccountVerify(@Body() dto) {
    return this.companyService.verifyAccount(dto);
  }

  @Post("/company/login")
  @ApiBody({ type: LoginDto })
  companyLogin(@Body() dto: LoginDto) {
    return this.companyService.login(dto);
  }

  @Post("/company/forgot-password")
  companyForgotPassword(@Body() dto: ForgotPasswordDto) {
    return this.companyService.forgotPassword(dto);
  }

  @Post("/company/reset-password")
  companyResetPassword(@Body() dto: ResetPasswordDto) {
    return this.companyService.resetPassword(dto);
  }

  @Post("/:id/activate-company")
  @ApiParam({ name: "id", type: "string" })
  @ApiResponse({
    type: UserInfoDto,
  })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.superAdmin)
  async activateCompany(@Param("id") id: string) {
    return await this.companyService.activateCompany(id);
  }

  @Post("/:id/deactivate-company")
  @ApiParam({ name: "id", type: "string" })
  @ApiResponse({
    type: UserInfoDto,
  })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.superAdmin)
  async deactivateCompany(@Param("id") id) {
    return await this.companyService.deactivateCompany(id);
  }

  @Get("/:id/company")
  @ApiResponse({
    type: IGetCompanyUser,
  })
  @ApiParam({ name: "id", type: "string" })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.admin, Role.superAdmin)
  async getCompany(@Param("id") id) {
    return await this.companyService.getCompanyById(id);
  }

  @Get("/companies")
  @ApiQuery({ type: GetAllCompanyDto, required: false })
  @ApiResponse({
    type: GetAllCompanyResponse,
  })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.admin, Role.superAdmin)
  async getAllCompanies(@Query() dto) {
    return await this.companyService.getAllCompanies(dto);
  }
}
