import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { AuthFacebookService } from "./auth-facebook.service";
import { AuthFacebookLoginDto } from "./dto/auth-facebook-login.dto";
import { SocialLoginService } from "../auth/socialLogin.service";

@ApiTags("Auth")
@Controller({
  path: "auth/facebook",
})
export class AuthFacebookController {
  constructor(
    private readonly socialLoginService: SocialLoginService,
    private readonly authFacebookService: AuthFacebookService,
  ) {}

  @Post("login-user")
  @HttpCode(HttpStatus.OK)
  async login(@Body() loginDto: AuthFacebookLoginDto) {
    const socialData =
      await this.authFacebookService.getProfileByToken(loginDto);

    return this.socialLoginService.validateUserSocialLogin(
      "facebook",
      socialData,
    );
  }
  @Post("login-company")
  @HttpCode(HttpStatus.OK)
  async loginCompany(@Body() loginDto: AuthFacebookLoginDto) {
    const socialData =
      await this.authFacebookService.getProfileByToken(loginDto);

    return this.socialLoginService.validateCompanySocialLogin(
      "facebook",
      socialData,
    );
  }
}
