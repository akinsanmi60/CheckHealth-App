import { Body, Controller, Post } from "@nestjs/common";
import { ContactService } from "./contact.service";
import { ApiTags } from "@nestjs/swagger";

@Controller("contact")
@ApiTags("Contact-us")
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post("/send")
  async sendContactMessage(@Body() dto) {
    return this.contactService.sendContactFormDetail(dto);
  }
}
