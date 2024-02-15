import { Module } from "@nestjs/common";
import { AuthAppleService } from "./auth-apple.service";
import { ConfigModule } from "@nestjs/config";
import { AuthAppleController } from "./auth-apple.controller";
import { AuthModule } from "src/auth/auth.module";
import { SocialLoginService } from "../auth/socialLogin.service";

@Module({
  imports: [ConfigModule, AuthModule],
  providers: [AuthAppleService, SocialLoginService],
  exports: [AuthAppleService],
  controllers: [AuthAppleController],
})
export class AuthAppleModule {}
