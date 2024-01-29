import { Module } from "@nestjs/common";
import { CirclesService } from "./circles.service";
import { CirclesController } from "./circles.controller";
import { AuthResolver } from "src/auth/authFinder.service";
import { PrismaService } from "src/prisma/prisma.service";

@Module({
  // imports: [AuthResolver],
  providers: [CirclesService, AuthResolver, PrismaService],
  controllers: [CirclesController],
})
export class CirclesModule {}
