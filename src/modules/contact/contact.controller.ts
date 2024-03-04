import { Body, Controller, Get, Post, Res } from "@nestjs/common";
import { ContactService } from "./contact.service";
import { ApiBody, ApiResponse, ApiTags } from "@nestjs/swagger";
import { MailingListDto } from "./dto/contact.dto";
import { GenericResponse } from "src/auth/dto/auth-response.dto";

@Controller("contact")
@ApiTags("Contact-us")
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post("/send")
  async sendContactMessage(@Body() dto) {
    return this.contactService.sendContactFormDetail(dto);
  }

  @Post("/mailing-list")
  @ApiBody({
    type: MailingListDto,
  })
  @ApiResponse({
    type: GenericResponse,
  })
  async submitMailingList(@Body() dto) {
    return this.contactService.submitMailingList(dto);
  }

  @Get("/export-mailing-list")
  @ApiResponse({
    type: GenericResponse,
  })
  async exportMailingList(@Res() res) {
    return this.contactService.exportMailingList(res);
  }
}
