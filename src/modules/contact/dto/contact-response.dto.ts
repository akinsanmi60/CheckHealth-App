import { ApiProperty } from "@nestjs/swagger";
import { GenericResponse } from "src/auth/dto/auth-response.dto";
import { IContactMailDto } from "./contact.dto";

class IMailingListData {
  @ApiProperty()
  id: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  created_at: string;
}

export class IMailingListResponseDto extends GenericResponse {
  @ApiProperty({
    type: () => IMailingListData,
    isArray: true,
  })
  data: IMailingListData[];
}

export class IContactResponseDto extends GenericResponse {
  @ApiProperty({
    type: () => IContactMailDto,
    isArray: true,
  })
  data: IContactMailDto[];
}
