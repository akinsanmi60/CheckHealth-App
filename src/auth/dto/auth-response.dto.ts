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
  address: string;

  @ApiProperty()
  lastLogin: string;

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

export class GetAllUserResponse extends GenericResponse {
  @ApiProperty()
  data: UserDataResponse;
}

class LoginData {
  @ApiProperty()
  accessToken: string;
}

export class LoginResponse extends GenericResponse {
  @ApiProperty()
  data: LoginData;
}

export class IGetIndividualUser extends GenericResponse {
  @ApiProperty()
  data: UserInfoDto;
}

//Comapny response

class CompanyDataResponse {
  @ApiProperty()
  id: string;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  lastLogin: Date;

  @ApiProperty()
  phoneNumber: string;

  @ApiProperty()
  status: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  updated_at: Date;

  @ApiProperty()
  isActive: boolean;

  @ApiProperty()
  companyName: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  addressCity: string;

  @ApiProperty()
  addressState: string;

  @ApiProperty()
  industry: string;

  @ApiProperty()
  website: string;

  @ApiProperty()
  passportImg: string;

  @ApiProperty()
  companyDescription: string;
}

class CompanyData {
  @ApiProperty()
  total: number;

  @ApiProperty()
  total_pages: number;

  @ApiProperty()
  current_page: number;

  @ApiProperty()
  page_size: number;

  @ApiProperty({
    type: () => CompanyDataResponse,
    isArray: true,
  })
  companies_list: CompanyDataResponse[];
}
export class IGetCompanyUser extends GenericResponse {
  @ApiProperty()
  data: CompanyDataResponse;
}

export class GetAllCompanyResponse extends GenericResponse {
  @ApiProperty()
  data: CompanyData;
}
