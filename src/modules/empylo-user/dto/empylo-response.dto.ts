import { ApiProperty } from "@nestjs/swagger";
import { GenericResponse } from "../../../auth/dto/auth-response.dto";

export class AdminUserInfoDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  isActive: boolean;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  phoneNumber: string;

  @ApiProperty()
  gender: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  status: string;

  @ApiProperty()
  lastLogin: string;

  @ApiProperty()
  permissions: string[];

  @ApiProperty()
  role: string;
}

class AdminUserDataResponse {
  @ApiProperty()
  total: number;

  @ApiProperty()
  total_pages: number;

  @ApiProperty()
  current_page: number;

  @ApiProperty()
  page_size: number;

  @ApiProperty({
    type: () => AdminUserInfoDto,
    isArray: true,
  })
  admin_list: AdminUserInfoDto[];
}

export class GetAllAdminUserResponse extends GenericResponse {
  @ApiProperty()
  data: AdminUserDataResponse;
}

export class IGetIndividualAdminUser extends GenericResponse {
  @ApiProperty()
  data: AdminUserInfoDto;
}
