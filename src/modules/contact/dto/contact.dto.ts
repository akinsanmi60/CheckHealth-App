import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsEmail } from "class-validator";

export class MailingListDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
