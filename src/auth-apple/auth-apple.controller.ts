import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { AuthAppleService } from "./auth-apple.service";
import { AuthAppleLoginDto } from "./dto/auth-apple-login.dto";
import { SocialLoginService } from "../auth/socialLogin.service";
import { LoginResponse } from "../auth/dto/auth-response.dto";

@ApiTags("Auth")
@Controller({
  path: "auth/apple",
  version: "1",
})
export class AuthAppleController {
  constructor(
    private readonly socialLoginService: SocialLoginService,
    private readonly authAppleService: AuthAppleService,
  ) {}

  @Post("login-user")
  @HttpCode(HttpStatus.OK)
  @ApiResponse({ type: LoginResponse })
  async login(@Body() loginDto: AuthAppleLoginDto) {
    const socialData = await this.authAppleService.getProfileByToken(loginDto);

    return this.socialLoginService.validateUserSocialLogin("apple", socialData);
  }

  @Post("login-company")
  @HttpCode(HttpStatus.OK)
  @ApiResponse({ type: LoginResponse })
  async loginCompany(@Body() loginDto: AuthAppleLoginDto) {
    const socialData = await this.authAppleService.getProfileByToken(loginDto);

    return this.socialLoginService.validateCompanySocialLogin(
      "apple",
      socialData,
    );
  }
}
