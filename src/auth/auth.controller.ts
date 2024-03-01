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
import { AuthService } from "./auth.service";
import {
  LoginDto,
  GetAllUserDto,
  ChangePasswordDto,
  VerifyEmailDto,
  GettingStartedUpdateProfileDto,
  UserGettingStartedDto,
  CompanySignupDto,
  GetAllCompanyDto,
  ForgotPasswordDto,
  ResetPasswordDto,
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
  LoginResponse,
  // UserInfoDto,
} from "./dto/auth-response.dto";
import { JwtAuthGuard } from "./jwtAuth.guard";
import { RolesGuard } from "../roles/roles.guard";
import { Roles } from "../roles/roles.decorator";
import { Role } from "../roles/role.enum";
import { CompanyAuthService } from "./company.service";
import { FileInterceptor } from "@nestjs/platform-express";
import { Permission } from "../permissions/premission.decorator";
import { AdminPermissions } from "../permissions/permission.enum";

@ApiTags("Auth")
@ApiBearerAuth()
@Controller("auth")
export class AuthController {
  constructor(
    private authService: AuthService,
    private companyService: CompanyAuthService,
  ) {}

  @Post("/user/signup")
  @ApiBody({ type: UserGettingStartedDto })
  @ApiResponse({ type: GenericResponse })
  gettingStarted(@Body() dto) {
    return this.authService.userGettingStarted(dto);
  }

  @Post("/:id/update-signup-profile")
  @ApiBody({ type: GettingStartedUpdateProfileDto })
  @ApiResponse({ type: GenericResponse })
  @ApiParam({ name: "id", type: "string" })
  @UseInterceptors(FileInterceptor("file"))
  updateProfile(
    @Param("id") id: string,
    @Body() dto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.authService.userUpdateProfile(id, dto, file);
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
  createPassword(@Param("id") id: string, @Body() dto) {
    return this.authService.changePassword(id, dto);
  }

  @Post("/user/login")
  @ApiBody({ type: LoginDto })
  @ApiResponse({
    type: LoginResponse,
  })
  login(@Body() dto: LoginDto) {
    return this.authService.login(dto);
  }

  @Post("/user/forgot-password")
  @ApiBody({
    type: ForgotPasswordDto,
  })
  ForgotPassword(@Body() dto) {
    return this.authService.forgotPassword(dto);
  }

  @Post("/user/reset-password")
  @ApiBody({
    type: ResetPasswordDto,
  })
  resetPassword(@Body() dto) {
    return this.authService.resetPassword(dto);
  }

  @Post("/:id/activate-user")
  @ApiParam({ name: "id", type: "string" })
  @ApiResponse({
    type: GenericResponse,
  })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles([Role.admin, Role.superAdmin])
  @Permission([AdminPermissions.UpdateUser])
  async activateUser(@Param("id") id: string) {
    return await this.authService.activateUser(id);
  }

  @Post("/:id/deactivate-user")
  @ApiParam({ name: "id", type: "string" })
  @ApiResponse({
    type: GenericResponse,
  })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles([Role.admin, Role.superAdmin])
  @Permission([AdminPermissions.UpdateUser])
  async deactivateUser(@Param("id") id) {
    return await this.authService.deactivateUser(id);
  }

  @Get("/:id/user")
  @ApiResponse({
    type: IGetIndividualUser,
  })
  @ApiParam({ name: "id", type: "string" })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles([Role.admin, Role.superAdmin, Role.user, Role.company])
  async getUser(@Param("id") id) {
    return await this.authService.getUserById(id);
  }

  @Get("/allusers")
  @ApiQuery({ type: GetAllUserDto, required: false })
  @ApiResponse({
    type: GetAllUserResponse,
  })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles([Role.admin, Role.superAdmin, Role.company])
  async getAllUsers(@Query() dto) {
    return await this.authService.getAllUsers(dto);
  }

  @Delete("/:id/user")
  @ApiParam({ name: "id", type: "string" })
  @ApiResponse({
    type: GenericResponse,
  })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles([Role.admin, Role.superAdmin])
  @Permission([AdminPermissions.DeleteUser])
  async deleteUser(@Param("id") id) {
    return await this.authService.deleteUser(id);
  }

  //Company starts here
  @Post("/company/signup")
  @ApiBody({ type: CompanySignupDto })
  @ApiResponse({ type: GenericResponse })
  companyGettingStarted(@Body() dto) {
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
  @ApiResponse({
    type: LoginResponse,
  })
  companyLogin(@Body() dto: LoginDto) {
    return this.companyService.login(dto);
  }

  @Post("/:id/company/change-password")
  @ApiBody({ type: ChangePasswordDto })
  @ApiResponse({ type: GenericResponse })
  @ApiParam({ name: "id", type: "string" })
  companyCreatePassword(
    @Param("id") id: string,
    @Body() dto: ChangePasswordDto,
  ) {
    return this.companyService.changePassword(id, dto);
  }

  @Post("/company/forgot-password")
  @ApiBody({
    type: ForgotPasswordDto,
  })
  companyForgotPassword(@Body() dto) {
    return this.companyService.forgotPassword(dto);
  }

  @Post("/company/reset-password")
  @ApiBody({
    type: ResetPasswordDto,
  })
  companyResetPassword(@Body() dto) {
    return this.companyService.resetPassword(dto);
  }

  @Post("/:id/activate-company")
  @ApiParam({ name: "id", type: "string" })
  @ApiResponse({
    type: GenericResponse,
  })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles([Role.superAdmin, Role.admin])
  @Permission([AdminPermissions.UpdateCompany])
  async activateCompany(@Param("id") id: string) {
    return await this.companyService.activateCompany(id);
  }

  @Post("/:id/deactivate-company")
  @ApiParam({ name: "id", type: "string" })
  @ApiResponse({
    type: GenericResponse,
  })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles([Role.superAdmin, Role.admin])
  @Permission([AdminPermissions.UpdateCompany])
  async deactivateCompany(@Param("id") id) {
    return await this.companyService.deactivateCompany(id);
  }

  @Get("/:id/company")
  @ApiResponse({
    type: IGetCompanyUser,
  })
  @ApiParam({ name: "id", type: "string" })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles([Role.admin, Role.superAdmin, Role.company])
  async getCompany(@Param("id") id) {
    return await this.companyService.getCompanyById(id);
  }

  @Get("/allcompanies")
  @ApiQuery({ type: GetAllCompanyDto, required: false })
  @ApiResponse({
    type: GetAllCompanyResponse,
  })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles([Role.admin, Role.superAdmin])
  @Permission([AdminPermissions.ReadCompany])
  async getAllCompanies(@Query() dto) {
    return await this.companyService.getAllCompanies(dto);
  }

  @Delete("/:id/company")
  @ApiParam({ name: "id", type: "string" })
  @ApiResponse({
    type: GenericResponse,
  })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles([Role.admin, Role.superAdmin])
  @Permission([AdminPermissions.DeleteCompany])
  async deleteCompany(@Param("id") id) {
    return await this.companyService.deleteCompany(id);
  }
}
