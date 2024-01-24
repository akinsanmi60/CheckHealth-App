import { ExtractJwt, Strategy } from "passport-jwt";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { AuthResolver } from "./authFinder.service";
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    configService: ConfigService,
    private readonly authResolver: AuthResolver,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: process.env.NODE_ENV === "dev",
      secretOrKey: configService.get<string>("JWT_ACCESS_SECRET", {
        infer: true,
      }),
    });
  }

  async validate(payload: any) {
    const user = await this.authResolver.findOneUserById(payload.id);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
