import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { MailData } from "./interfaces/mail-data.interface";
import { MailerService } from "../mailer/mailer.service";
import * as path from "path";

@Injectable()
export class MailService {
  constructor(
    private readonly mailerService: MailerService,
    private readonly configService: ConfigService,
  ) {}

  async userSignUp(
    mailData: MailData<{ name: string; code: string }>,
  ): Promise<void> {
    const emailConfirmTitle = "Thank you for joining employ";

    // const url = new URL(
    //   this.configService.getOrThrow("FRONTEND_DOMAIN", {
    //     infer: true,
    //   }) + "/confirm-email",
    // );
    // url.searchParams.set("hash", mailData.data.hash);

    await this.mailerService.sendMail({
      to: mailData.to,
      subject: emailConfirmTitle,
      templatePath: path.join(
        process.cwd(),
        "src",
        "mail",
        "mail-templates",
        "activations.hbs",
      ),
      context: {
        title: emailConfirmTitle,
        // url: url?.toString(),
        actionTitle: emailConfirmTitle,
        app_name: this.configService.get("APP", { infer: true }),
        name: mailData.data.name,
        code: mailData.data.code,
      },
    });
  }

  async forgotPassword(
    mailData: MailData<{ name: string; code: string }>,
  ): Promise<void> {
    //appName
    const app_name = this.configService.get("APP", {
      infer: true,
    }) as string;

    const resetPasswordTitle = `Password Reset Instructions for ${app_name}`;
    // const url = new URL(
    //   this.configService.getOrThrow("app.frontendDomain", {
    //     infer: true,
    //   }) + "/password-change",
    // );
    // url.searchParams.set("hash", mailData.data.hash);

    await this.mailerService.sendMail({
      to: mailData.to,
      subject: resetPasswordTitle,
      templatePath: path.join(
        process.cwd(),
        "src",
        "mail",
        "mail-templates",
        "forgot-password.hbs",
      ),
      context: {
        title: resetPasswordTitle,
        // url: url.toString(),
        actionTitle: resetPasswordTitle,
        app_name,
        name: mailData.data.name,
        code: mailData.data.code,
      },
    });
  }

  async deactiveVariousUsers(
    mailData: MailData<{ name: string }>,
  ): Promise<void> {
    const app_name = this.configService.get("APP", {
      infer: true,
    }) as string;

    const decativationTitle = `Notification for Deactivation of Account on ${app_name}`;

    await this.mailerService.sendMail({
      to: mailData.to,
      subject: decativationTitle,
      templatePath: path.join(
        process.cwd(),
        "src",
        "mail",
        "mail-templates",
        "accountDeactivation.hbs",
      ),
      context: {
        title: decativationTitle,
        actionTitle: decativationTitle,
        app_name,
        name: mailData.data.name,
      },
    });
  }
  async activeVariousUsers(
    mailData: MailData<{ name: string }>,
  ): Promise<void> {
    const app_name = this.configService.get("APP", {
      infer: true,
    }) as string;

    const decativationTitle = `Notification for Activation of Account on ${app_name}`;

    await this.mailerService.sendMail({
      to: mailData.to,
      subject: decativationTitle,
      templatePath: path.join(
        process.cwd(),
        "src",
        "mail",
        "mail-templates",
        "accountActivation.hbs",
      ),
      context: {
        title: decativationTitle,
        actionTitle: decativationTitle,
        app_name,
        name: mailData.data.name,
      },
    });
  }
}
