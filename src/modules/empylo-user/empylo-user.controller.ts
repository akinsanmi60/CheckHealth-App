import { Get, Query, UseInterceptors } from "@nestjs/common";
import { Body, Controller, Param, Post, UseGuards } from "@nestjs/common";
import { EmpyloUserService } from "./empylo-user.service";
import {
  ApiTags,
  ApiBearerAuth,
  ApiBody,
  ApiResponse,
  ApiParam,
  ApiQuery,
} from "@nestjs/swagger";
import {
  GenericResponse,
  LoginResponse,
} from "../../auth/dto/auth-response.dto";
import { AddAdminUSerDto, GetAllAdminUserDto } from "./dto/empylo-user.dto";
import {
  ChangePasswordDto,
  ForgotPasswordDto,
  LoginDto,
  ResetPasswordDto,
  VerifyEmailDto,
} from "../../auth/dto/auth.dto";
import { JwtAuthGuard } from "src/auth/jwtAuth.guard";
import { Role } from "../../roles/role.enum";
import { Roles } from "../../roles/roles.decorator";
import { RolesGuard } from "../../roles/roles.guard";
import {
  GetAllAdminUserResponse,
  IGetIndividualAdminUser,
} from "./dto/empylo-response.dto";
import { Permission } from "../../permissions/premission.decorator";
import { AdminPermissions } from "../../permissions/permission.enum";
import { ResponseInterceptor } from "../../filter/responseFilter/respone.service";

@ApiTags("Empylo Admin User")
@ApiBearerAuth()
@Controller("empylo-user")
@UseInterceptors(ResponseInterceptor)
export class EmpyloUserController {
  constructor(private readonly empyloUserService: EmpyloUserService) {}

  @Post("/admin-creation")
  @ApiBody({ type: AddAdminUSerDto })
  @ApiResponse({ type: GenericResponse })
  gettingStarted(@Body() dto) {
    return this.empyloUserService.addAdminUser(dto);
  }

  @Post("/admin/login")
  @ApiBody({ type: LoginDto })
  @ApiResponse({
    type: LoginResponse,
  })
  login(@Body() dto: LoginDto) {
    return this.empyloUserService.loginAdminUser(dto);
  }

  @Post("/admin/verify")
  @ApiBody({
    type: VerifyEmailDto,
  })
  @ApiResponse({
    type: GenericResponse,
  })
  accountVerify(@Body() dto) {
    return this.empyloUserService.verifyAccount(dto);
  }

  @Post("/admin/change-password")
  @ApiBody({ type: ChangePasswordDto })
  @ApiResponse({ type: GenericResponse })
  @ApiParam({ name: "id", type: "string" })
  createPassword(@Param("id") id: string, @Body() dto) {
    return this.empyloUserService.changePassword(id, dto);
  }

  @Post("/admin/forgot-password")
  @ApiBody({
    type: ForgotPasswordDto,
  })
  ForgotPassword(@Body() dto) {
    return this.empyloUserService.forgotPassword(dto);
  }

  @Post("/admin/reset-password")
  @ApiBody({
    type: ResetPasswordDto,
  })
  resetPassword(@Body() dto) {
    return this.empyloUserService.resetPassword(dto);
  }

  @Post("/:id/activate-admin")
  @ApiParam({ name: "id", type: "string" })
  @ApiResponse({
    type: GenericResponse,
  })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles([Role.superAdmin, Role.admin])
  @Permission([AdminPermissions.UpdateCompany])
  async activateUser(@Param("id") id: string) {
    return await this.empyloUserService.activateEmpyloUser(id);
  }

  @Post("/:id/deactivate-admin")
  @ApiParam({ name: "id", type: "string" })
  @ApiResponse({
    type: GenericResponse,
  })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles([Role.superAdmin, Role.admin])
  @Permission([AdminPermissions.UpdateAdmin])
  async deactivateUser(@Param("id") id) {
    return await this.empyloUserService.deactivateEmpyloUser(id);
  }

  @Get("/:id/admin-details")
  @ApiResponse({
    type: IGetIndividualAdminUser,
  })
  @ApiParam({ name: "id", type: "string" })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles([Role.admin, Role.superAdmin])
  @Permission([AdminPermissions.ReadAdmin])
  async getCompany(@Param("id") id) {
    return await this.empyloUserService.getEmpyloUserById(id);
  }

  @Get("/all-admins")
  @ApiQuery({ type: GetAllAdminUserDto, required: false })
  @ApiResponse({
    type: GetAllAdminUserResponse,
  })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles([Role.superAdmin])
  async getAllCompanies(@Query() dto) {
    return await this.empyloUserService.getAllEmpyloUsers(dto);
  }
}
