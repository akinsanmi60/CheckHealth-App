import { Module } from "@nestjs/common";
import { EmpyloUserService } from "./empylo-user.service";
import { EmpyloUserController } from "./empylo-user.controller";
import { PrismaService } from "../../prisma/prisma.service";
import { JwtStrategy } from "../../auth/strategies/auth.jwt.strategy";
import { PasswordService } from "../../auth/password.service";
import { MailModule } from "../../mail/mail.module";
import { AuthResolver } from "../../auth/authFinder.service";
import { JwtService } from "@nestjs/jwt";

@Module({
  imports: [MailModule],
  controllers: [EmpyloUserController],
  providers: [
    EmpyloUserService,
    PrismaService,
    JwtStrategy,
    PasswordService,
    AuthResolver,
    JwtService,
  ],
})
export class EmpyloUserModule {}
