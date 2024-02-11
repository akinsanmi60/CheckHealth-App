import { MiddlewareConsumer, Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { PrismaService } from "./prisma/prisma.service";
import config from "./common/configs/config";
import { ConfigModule } from "@nestjs/config";
import { LoggerMiddleware } from "./middlewares/logger.middleware";
import { ResponseInterceptor } from "./filter/responseFilter/respone.service";
import { HttpModule } from "@nestjs/axios";
import { ThrottlerGuard, ThrottlerModule } from "@nestjs/throttler";
import { JwtService } from "@nestjs/jwt";
import { APP_GUARD } from "@nestjs/core";
import { CompanyModule } from "./modules/circles/company.module";
import { UserModule } from "./modules/user/user.module";
import { AssessmentModule } from "./modules/assessment/assessment.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [config] }),
    HttpModule.register({ timeout: 5000, maxRedirects: 5 }),
    AuthModule,
    CompanyModule,
    UserModule,
    ThrottlerModule.forRoot([
      {
        name: "short",
        ttl: 1000,
        limit: 3,
      },
      {
        name: "long",
        ttl: 60000,
        limit: 100,
      },
    ]),
    AssessmentModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    PrismaService,
    ResponseInterceptor,
    JwtService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    //forRoutes("*") means forl all routes
    consumer.apply(LoggerMiddleware).forRoutes("*");
  }
}
