import { NestExpressApplication } from "@nestjs/platform-express";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { ValidationPipe } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import {
  CorsConfig,
  NestConfig,
  SwaggerConfig,
} from "./common/configs/config.interface";
import { ResponseInterceptor } from "./responeFilter/respone.service";

async function bootstrap() {
  const CSS_URL =
    "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.min.css";

  const CUSTOM_JS_URL = [
    "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-bundle.js",
    "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-standalone-preset.js",
  ];

  const app: NestExpressApplication = await NestFactory.create(AppModule);

  app.useGlobalInterceptors(new ResponseInterceptor());

  // Validation
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  // enable shutdown hook
  app.enableShutdownHooks();

  const configService = app.get(ConfigService);
  const nestConfig = configService.get<NestConfig>("nest");
  const corsConfig = configService.get<CorsConfig>("cors");
  const swaggerConfig = configService.get<SwaggerConfig>("swagger");

  if (swaggerConfig.enabled) {
    const options = new DocumentBuilder()
      .setTitle(swaggerConfig.title || "Employ Project")
      .setDescription(
        swaggerConfig.description || "The Employ API description",
      )
      .setVersion(swaggerConfig.version || "1.0")
      .addBasicAuth({
        type: "http",
        scheme: "basic",
        bearerFormat: "Basic",
        name: "Authorization",
        description: "Enter email and password",
      })
      .build();

    const document = SwaggerModule.createDocument(app, options);

    SwaggerModule.setup(swaggerConfig.path || "/api/employ-docs", app, document, {
      customCssUrl: CSS_URL,
      customJs: CUSTOM_JS_URL,
      swaggerOptions: {
        persistAuthorization: true,
      },
    });
  }


  // Cors
  if (corsConfig.enabled) {
    app.enableCors();
  }

  await app.listen(nestConfig.port || 3300);
}
bootstrap();
