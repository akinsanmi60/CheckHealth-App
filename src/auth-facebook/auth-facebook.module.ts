import { Module } from "@nestjs/common";
import { AuthFacebookService } from "./auth-facebook.service";
import { ConfigModule } from "@nestjs/config";
import { AuthFacebookController } from "./auth-facebook.controller";
import { AuthModule } from "src/auth/auth.module";
import { SocialLoginService } from "src/auth/socialLogin.service";

@Module({
  imports: [ConfigModule, AuthModule],
  providers: [AuthFacebookService, SocialLoginService],
  exports: [AuthFacebookService],
  controllers: [AuthFacebookController],
})
export class AuthFacebookModule {}
