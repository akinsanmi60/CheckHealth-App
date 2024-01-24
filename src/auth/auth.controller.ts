// import {
//   Body,
//   Controller,
//   Get,
//   Param,
//   Post,
//   Query,
//   UseGuards,
// } from "@nestjs/common";
// import { AuthService } from "./auth.service";
// import {
//   BNVDto,
//   ForgotPasswordDto,
//   ForgotPasswordPhoneVerifyDto,
//   LoginDto,
//   ResetPasswordDto,
//   GettingStartedDto,
//   CreatePasswordDto,
//   CreateTransactionPinDto,
//   IdentityVerificationDto,
//   GetAllUserDto,
// } from "./dto/auth.dto";
// import {
//   ApiBearerAuth,
//   ApiBody,
//   ApiParam,
//   ApiQuery,
//   ApiResponse,
//   ApiTags,
// } from "@nestjs/swagger";
// import {
//   GenericResponse,
//   GetAllUserResponse,
//   UserInfoDto,
//   VerifyCodeResponse,
// } from "./dto/auth-response.dto";
// import { JwtAuthGuard } from "./jwtAuth.guard";
// import { RolesGuard } from "../roles/roles.guard";
// import { Roles } from "../roles/roles.decorator";
// import { Role } from "../roles/role.enum";

// @ApiTags("Auth")
// @ApiBearerAuth()
// @Controller("auth")
// export class AuthController {
//   constructor(private authService: AuthService) {}

//   @Post("getting-started")
//   @ApiBody({ type: GettingStartedDto })
//   @ApiResponse({ type: VerifyCodeResponse })
//   gettingStarted(@Body() dto: GettingStartedDto) {
//     return this.authService.gettingStarted(dto);
//   }

//   @Post("verify/phone-number-code")
//   @ApiBody({ type: ForgotPasswordPhoneVerifyDto })
//   @ApiResponse({ type: GenericResponse })
//   VerifyEmail(@Body() dto: ForgotPasswordPhoneVerifyDto) {
//     return this.authService.confirmPhoneNumberCode(dto);
//   }

//   @Post("create/password")
//   @ApiBody({ type: CreatePasswordDto })
//   @ApiResponse({ type: GenericResponse })
//   createPassword(@Body() dto: CreatePasswordDto) {
//     return this.authService.createPassword(dto);
//   }

//   @Post("create/transaction-pin")
//   @ApiBody({ type: CreateTransactionPinDto })
//   @ApiResponse({ type: GenericResponse })
//   createTransactionPin(@Body() dto: CreateTransactionPinDto) {
//     return this.authService.createTransactionPin(dto);
//   }

//   @Post("identity-verification")
//   @ApiBody({ type: IdentityVerificationDto })
//   identityVerification(@Body() dto: IdentityVerificationDto) {
//     return this.authService.identityVerification(dto);
//   }

//   @Post("bvn-verification")
//   bvnVerification(@Body() dto: BNVDto) {
//     return this.authService.bvnVerification(dto);
//   }

//   @Post("login")
//   @ApiBody({ type: LoginDto })
//   login(@Body() dto: LoginDto) {
//     return this.authService.login(dto);
//   }

//   @Post("forgot-password")
//   ForgotPassword(@Body() dto: ForgotPasswordDto) {
//     return this.authService.forgotPassword(dto);
//   }

//   @Post("forgotpassword/phone-verificetion")
//   verifyForgotPasswordPhoneNumber(@Body() dto: ForgotPasswordPhoneVerifyDto) {
//     return this.authService.verifyForgotPasswordPhoneNumber(dto);
//   }

//   @Post("reset-password")
//   resetPassword(@Body() dto: ResetPasswordDto) {
//     return this.authService.resetPassword(dto);
//   }

//   @Post(":id/activate-user")
//   @ApiParam({ name: "id", type: "string" })
//   @ApiResponse({
//     type: UserInfoDto,
//   })
//   @UseGuards(JwtAuthGuard, RolesGuard)
//   @Roles(Role.admin)
//   async activateUser(@Param("id") id: string) {
//     return await this.authService.activateUser(id);
//   }

//   @Post(":id/deactivate-user")
//   @ApiParam({ name: "id", type: "string" })
//   @ApiResponse({
//     type: UserInfoDto,
//   })
//   @UseGuards(JwtAuthGuard, RolesGuard)
//   @Roles(Role.admin)
//   async deactivateUser(@Param("id") id) {
//     return await this.authService.deactivateUser(id);
//   }

//   @Get("allusers")
//   @ApiQuery({ type: GetAllUserDto, required: false })
//   @ApiResponse({
//     type: GetAllUserResponse,
//   })
//   // @UseGuards(JwtAuthGuard, RolesGuard)
//   // @Roles(Role.admin)
//   async getAllUsers(@Query() dto) {
//     return await this.authService.getAllUsers(dto);
//   }
// }
