import { Injectable } from "@nestjs/common";
import { Facebook } from "fb";
import { ConfigService } from "@nestjs/config";
import { SocialInterface } from "../social/interfaces/social.interface";
import { FacebookInterface } from "./interfaces/facebook.interface";
import { AuthFacebookLoginDto } from "./dto/auth-facebook-login.dto";

@Injectable()
export class AuthFacebookService {
  private fb: Facebook;

  constructor(configService: ConfigService) {
    this.fb = new Facebook({
      appId: configService.get("FACEBOOK_APP_ID", {
        infer: true,
      }),
      appSecret: configService.get("FACEBOOK_APP_SECRET", {
        infer: true,
      }),
      version: "v7.0",
    });
  }

  async getProfileByToken(
    loginDto: AuthFacebookLoginDto,
  ): Promise<SocialInterface> {
    this.fb.setAccessToken(loginDto.accessToken);

    const data: FacebookInterface = await new Promise(resolve => {
      this.fb.api(
        "/me",
        "get",
        {
          fields: ["id,last_name,email,first_name"],
          access_token: loginDto.accessToken,
        },
        (response: FacebookInterface | PromiseLike<FacebookInterface>) => {
          resolve(response);
        },
      );
    });

    return {
      id: data.id,
      email: data.email,
      firstName: data.first_name,
      lastName: data.last_name,
    };
  }
}
