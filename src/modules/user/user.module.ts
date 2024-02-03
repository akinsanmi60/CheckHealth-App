import { Module } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { JwtService } from "@nestjs/jwt";
import { AuthResolver } from "../../auth/authFinder.service";
import { PasswordService } from "../../auth/password.service";
import { PrismaService } from "src/prisma/prisma.service";
import { MailModule } from "../../mail/mail.module";

@Module({
  imports: [MailModule],
  controllers: [UserController],
  providers: [
    UserService,
    AuthResolver,
    PrismaService,
    PasswordService,
    JwtService,
  ],
})
export class UserModule {}
