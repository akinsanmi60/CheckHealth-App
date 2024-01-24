import { ApiProperty } from "@nestjs/swagger";

class VerifyCodeData {
  @ApiProperty()
  code: string;
}

export class GenericResponse {
  @ApiProperty()
  status: boolean;

  @ApiProperty()
  statusCode: number;

  @ApiProperty()
  message: string;
}

export class VerifyCodeResponse extends GenericResponse {
  @ApiProperty()
  data: VerifyCodeData;
}

export class VerifyAccountResponse {
  @ApiProperty()
  status: boolean;

  @ApiProperty()
  statusCode: number;

  @ApiProperty({ example: "Phone verification success" })
  message: string;
}

export class UserInfoDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  is_active: boolean;

  @ApiProperty()
  first_name: string;

  @ApiProperty()
  last_name: string;

  @ApiProperty()
  phone_number: string;

  @ApiProperty()
  gender: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  last_login: string;

  @ApiProperty()
  DOB: string;
}

class UserDataResponse {
  @ApiProperty()
  total: number;

  @ApiProperty()
  total_pages: number;

  @ApiProperty()
  current_page: number;

  @ApiProperty()
  page_size: number;

  @ApiProperty({
    type: () => UserInfoDto,
    isArray: true,
  })
  users_list: UserInfoDto[];
}

export class GetAllUserResponse {
  @ApiProperty()
  message: string;
  @ApiProperty()
  data: UserDataResponse;
}

class LoginData {
  @ApiProperty()
  accessToken: string;

  @ApiProperty()
  refreshToken: string;
}

export class LoginResponse extends GenericResponse {
  @ApiProperty()
  data: LoginData;
}

export class IGetIndividualUser extends GenericResponse {
  @ApiProperty()
  data: UserInfoDto;
}
