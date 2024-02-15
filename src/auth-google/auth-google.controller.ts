import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { AuthGoogleService } from "./auth-google.service";
import { AuthGoogleLoginDto } from "./dto/auth-google-login.dto";
import { SocialLoginService } from "src/auth/socialLogin.service";
import { LoginResponse } from "src/auth/dto/auth-response.dto";

@ApiTags("Auth")
@Controller({
  path: "auth/google",
})
export class AuthGoogleController {
  constructor(
    private readonly authGoogleService: AuthGoogleService,
    private readonly socialLoginService: SocialLoginService,
  ) {}

  @Post("login-user")
  @HttpCode(HttpStatus.OK)
  @ApiResponse({ type: LoginResponse })
  async login(@Body() loginDto: AuthGoogleLoginDto) {
    const socialData = await this.authGoogleService.getProfileByToken(loginDto);
    return this.socialLoginService.validateUserSocialLogin(
      "google",
      socialData,
    );
  }
  @Post("login-company")
  @HttpCode(HttpStatus.OK)
  @ApiResponse({ type: LoginResponse })
  async loginCompany(@Body() loginDto: AuthGoogleLoginDto) {
    const socialData = await this.authGoogleService.getProfileByToken(loginDto);
    return this.socialLoginService.validateCompanySocialLogin(
      "google",
      socialData,
    );
  }
}
