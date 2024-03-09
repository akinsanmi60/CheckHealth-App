import { BadRequestException, HttpStatus, Injectable } from "@nestjs/common";
import { Response } from "express";

import { PrismaService } from "src/prisma/prisma.service";
import { v4 as uuidv4 } from "uuid";
import { MailingListDto } from "./dto/contact.dto";

@Injectable()
export class ContactService {
  private readonly timeGenerated: string;

  constructor(private prisma: PrismaService) {
    this.timeGenerated = new Date().toISOString();
  }

  async sendContactFormDetail(dto: any) {
    const { firstName, lastName, email, message, companyName } = dto;
    console.log(firstName, lastName, email, message, companyName);

    return {
      message: "Your message has been sent successfully",
    };
  }

  async submitMailingList(dto: MailingListDto) {
    const { email } = dto;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      throw new BadRequestException("Invalid email format.");
    }

    const checkEmail = await this.prisma.mailingList.findUnique({
      where: {
        email: email,
      },
    });

    if (checkEmail) {
      throw new BadRequestException("Email already exists in our mailing list");
    }

    const createMail = await this.prisma.mailingList.create({
      data: {
        id: uuidv4(),
        email: email,
        created_at: this.timeGenerated,
      },
    });

    if (!createMail) {
      throw new BadRequestException("Email was not added to mailing list");
    }

    return {
      message: "Email was added to mailing list successfully",
    };
  }

  async exportMailingList(res: Response) {
    const mailingList = await this.prisma.mailingList.findMany();

    if (!mailingList || mailingList.length === 0) {
      throw new BadRequestException("Mailing list is empty");
    }

    const emails = mailingList.map(mail => mail.email);
    const csvData = this.convertToCSV(emails);

    res.header("Content-Type", "text/csv");
    res.attachment("mailingList.csv");
    res.status(HttpStatus.OK).send(csvData);
  }

  private convertToCSV(emails: string[]) {
    const csvData = emails.map(email => `${email}`).join("\n");
    return csvData;
  }
}