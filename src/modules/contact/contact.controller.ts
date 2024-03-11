import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Res,
} from "@nestjs/common";
import { ContactService } from "./contact.service";
import { ApiBody, ApiParam, ApiResponse, ApiTags } from "@nestjs/swagger";
import { IContactMailDto, MailingListDto } from "./dto/contact.dto";
import { GenericResponse } from "src/auth/dto/auth-response.dto";
import { IMailingListResponseDto } from "./dto/contact-response.dto";

@Controller("contact")
@ApiTags("Contact-us")
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post("/send/contact-mail")
  async sendContactMessage(@Body() dto) {
    return this.contactService.sendContactFormDetail(dto);
  }

  @Get("/contact-list")
  @ApiResponse({
    type: IContactMailDto,
  })
  async getAllContactMailingList() {
    return this.contactService.getAllContactMailingList();
  }

  @Delete("/contact-list/:id")
  @ApiParam({
    name: "id",
    type: String,
  })
  @ApiResponse({
    type: GenericResponse,
  })
  async deleteContactMailingList(@Param("id") id) {
    return this.contactService.deleteContactMailingList(id);
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

  @Delete("/mailing-list/:id")
  @ApiParam({
    name: "id",
    type: String,
  })
  @ApiResponse({
    type: GenericResponse,
  })
  async deleteMailingList(@Param("id") id) {
    return this.contactService.deleteMailingList(id);
  }

  @Get("/export-mailing-list")
  @ApiResponse({
    type: GenericResponse,
  })
  async exportMailingList(@Res() res) {
    return this.contactService.exportMailingList(res);
  }

  @Get("/mailing-list")
  @ApiResponse({
    type: IMailingListResponseDto,
  })
  async getMailingList() {
    return this.contactService.getMailingList();
  }
}
