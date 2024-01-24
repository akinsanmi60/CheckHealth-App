import { Module } from "@nestjs/common";
// import { AuthController } from "./auth.controller";
// import { AuthService } from "./auth.service";
import { PrismaService } from "src/prisma/prisma.service";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { SecurityConfig } from "src/common/configs/config.interface";
import { ConfigService } from "@nestjs/config";
import { PasswordService } from "./password.service";
import { JwtStrategy } from "./auth.jwt.strategy";
import { MailModule } from "../mail/mail.module";
import { AuthResolver } from "./authFinder.service";
import { HttpModule } from "@nestjs/axios";

@Module({
  imports: [
    HttpModule,
    MailModule,
    PassportModule.register({ defaultStrategy: "jwt" }),
    JwtModule.registerAsync({
      useFactory: async (configService: ConfigService) => {
        const securityConfig = configService.get<SecurityConfig>("security");
        return {
          secret: configService.get<string>("JWT_ACCESS_SECRET"),
          signOptions: {
            expiresIn: securityConfig.expiresIn,
          },
        };
      },
      inject: [ConfigService],
    }),
  ],
  controllers: [],
  providers: [
    // AuthService,
    PrismaService,
    JwtStrategy,
    PasswordService,
    AuthResolver,
  ],
})
export class AuthModule {}
