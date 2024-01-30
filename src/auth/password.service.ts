import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { hash, compare } from "bcrypt";
import { SecurityConfig } from "../common/configs/config.interface";
import { JwtService } from "@nestjs/jwt";

type IPayload = {
  [x: string]: string | number | boolean | object | Date;
};

@Injectable()
export class PasswordService {
  get bcryptSaltRounds(): string | number {
    const securityConfig = this.configService.get<SecurityConfig>("security");
    const saltOrRounds = securityConfig.bcryptSaltOrRound;

    return Number.isInteger(Number(saltOrRounds))
      ? Number(saltOrRounds)
      : saltOrRounds;
  }

  constructor(
    private configService: ConfigService,
    private readonly jwtService: JwtService,
  ) {}

  validatePassword(password: string, hashedPassword: string): Promise<boolean> {
    return compare(password, hashedPassword);
  }

  hashPassword(password: string): Promise<string> {
    return hash(password, this.bcryptSaltRounds);
  }

  generateTokens(payload: IPayload) {
    return {
      accessToken: this.generateAccessToken(payload),
      // refreshToken: this.generateRefreshToken(payload),
    };
  }

  generateAccessToken(payload: IPayload) {
    return this.jwtService.sign(payload, {
      secret: this.configService.get("JWT_ACCESS_SECRET"),
    });
  }

  generateRefreshToken(payload: IPayload): string | null {
    const reformedPayload = payload?.id;
    const securityConfig = this.configService.get<SecurityConfig>("security");
    if (reformedPayload) {
      return this.jwtService.sign(
        { reformedPayload },
        {
          secret: this.configService.get("JWT_REFRESH_SECRET"),
          expiresIn: securityConfig.refreshIn,
        },
      );
    }
    return null;
  }
}
