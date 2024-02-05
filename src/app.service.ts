import { Injectable } from "@nestjs/common";
import * as crypto from "crypto";

@Injectable()
export class AppService {
  getHello(): string {
    const salt = crypto.randomBytes(4).toString("hex") + "/" + "sa-erdx";

    console.log(`${salt}`);

    return "Hello World!";
  }
}
