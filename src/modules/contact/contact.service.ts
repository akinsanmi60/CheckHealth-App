import {
  BadRequestException,
  HttpStatus,
  Injectable,
  UseInterceptors,
} from "@nestjs/common";
import { Response } from "express";

import { PrismaService } from "src/prisma/prisma.service";
import { v4 as uuidv4 } from "uuid";
import { IContactMailDto, MailingListDto } from "./dto/contact.dto";
import { ResponseInterceptor } from "src/filter/responseFilter/respone.service";

@Injectable()
@UseInterceptors(ResponseInterceptor)
export class ContactService {
  private readonly timeGenerated: string;

  constructor(private prisma: PrismaService) {
    this.timeGenerated = new Date().toISOString();
  }

  async sendContactFormDetail(dto: IContactMailDto) {
    const { firstName, lastName, email, message, companyName } = dto;

    if (!firstName || !lastName || !email || !message || !companyName) {
      throw new BadRequestException("Please fill in all the required fields");
    }

    const createMail = await this.prisma.contactMail.create({
      data: {
        id: uuidv4(),
        firstName: firstName,
        lastName: lastName,
        email: email,
        message: message,
        companyName: companyName,
        created_at: this.timeGenerated,
      },
    });

    if (!createMail) {
      throw new BadRequestException("Email was not sent");
    }

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

  async getMailingList() {
    const mailingList = await this.prisma.mailingList.findMany();

    if (!mailingList || mailingList.length === 0) {
      throw new BadRequestException("Mailing list is empty");
    }

    return {
      message: "Mailing list retrieved successfully",
      data: mailingList,
    };
  }

  async getAllContactMailingList() {
    const contactList = await this.prisma.contactMail.findMany();

    if (!contactList || contactList.length === 0) {
      throw new BadRequestException("Contact list is empty");
    }

    return {
      message: "Contact list retrieved successfully",
      data: contactList,
    };
  }

  async deleteContactMailingList(id: string) {
    const checkEmail = await this.prisma.contactMail.findUnique({
      where: {
        id: id,
      },
    });

    if (!checkEmail) {
      throw new BadRequestException("Email does not exist in our mailing list");
    }

    const deleteMailingList = await this.prisma.contactMail.delete({
      where: {
        id: id,
      },
    });

    if (!deleteMailingList) {
      throw new BadRequestException(
        "Failed to delete email from constact mailing list.",
      );
    }

    return {
      message: "Email deleted from contact mailing list successfully",
    };
  }

  async deleteMailingList(id: string) {
    const checkEmail = await this.prisma.mailingList.findUnique({
      where: {
        id: id,
      },
    });

    if (!checkEmail) {
      throw new BadRequestException("Email does not exist in our mailing list");
    }

    const deleteMailingList = await this.prisma.mailingList.delete({
      where: {
        id: id,
      },
    });

    if (!deleteMailingList) {
      throw new BadRequestException(
        "Failed to delete email from mailing list.",
      );
    }

    return {
      message: "Email deleted from mailing list successfully",
    };
  }

  private convertToCSV(emails: string[]) {
    const csvData = emails.map(email => `${email}`).join("\n");
    return csvData;
  }
}
