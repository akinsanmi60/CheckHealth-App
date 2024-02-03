import { Module } from "@nestjs/common";
import { CirclesService } from "./circles.service";
import { CirclesController } from "./circles.controller";
import { AuthResolver } from "../../auth/authFinder.service";
import { PrismaService } from "src/prisma/prisma.service";
import { MailModule } from "../../mail/mail.module";
import { PasswordService } from "../../auth/password.service";
import { JwtService } from "@nestjs/jwt";

@Module({
  imports: [MailModule],
  providers: [
    CirclesService,
    AuthResolver,
    PrismaService,
    PasswordService,
    JwtService,
  ],
  controllers: [CirclesController],
})
export class CirclesModule {}
