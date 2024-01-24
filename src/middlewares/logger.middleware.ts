// logger.middleware.ts
import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";
import { format } from "date-fns";
import { v4 as uuidv4 } from "uuid";
import * as fs from "fs";
import * as path from "path";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const sanitizedUrl = req.url.replace(
      /\/password\/\w+/g,
      "/password/[REDACTED]",
    );
    this.logEvents(
      `${req.method}\t${req.headers.origin}\t${sanitizedUrl}`,
      "reqLog.txt",
    );
    console.log(`${req.method} ${req.path}`);
    next();
  }

  private async logEvents(message: string, logName: string): Promise<void> {
    const dateTime = `${format(new Date(), "yyyyMMdd\tHH:mm:ss")}`;
    const logItem = `${dateTime}\t${uuidv4()}\t${message}\n`;
    const { existsSync, promises } = fs;

    try {
      const logsDir = path.join(__dirname, "../../src", "logs");
      if (!existsSync(logsDir)) {
        await promises.mkdir(logsDir);
      }

      await promises.appendFile(path.join(logsDir, logName), logItem);
    } catch (err) {
      console.log(err);
    }
  }
}
