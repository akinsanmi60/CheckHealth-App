import { ExtractJwt, Strategy } from "passport-jwt";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { AuthResolver } from "../authFinder.service";

const cookieExtractor = req => req?.cookies.accessToken;

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, "jwt") {
  constructor(
    configService: ConfigService,
    private readonly authResolver: AuthResolver,
  ) {
    super({
      jwtFromRequest: ExtractJwt?.fromExtractors([
        ExtractJwt?.fromAuthHeaderAsBearerToken(),
        ExtractJwt?.fromUrlQueryParameter("token"),
        cookieExtractor,
      ]), // ignoreExpiration: process.env.NODE_ENV === "dev",
      secretOrKey: configService.get<string>("JWT_ACCESS_SECRET", {
        infer: true,
      }),
    });
  }

  async validate(payload: any) {
    const user =
      (await this.authResolver.findUserWithField(payload.id, "id", "user")) ||
      (await this.authResolver.findUserWithField(
        payload.id,
        "id",
        "companyUser",
      ));

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
