import { Injectable } from "@nestjs/common";

@Injectable()
export class ContactService {
  constructor() {}

  async sendContactFormDetail(dto: any) {
    const { firstName, lastName, email, message, companyName } = dto;
    console.log(firstName, lastName, email, message, companyName);

    return {
      message: "Your message has been sent successfully",
    };
  }
}
