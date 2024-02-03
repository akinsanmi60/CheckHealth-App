import { ApiProperty } from "@nestjs/swagger";
import { GenericResponse } from "src/auth/dto/auth-response.dto";

class MemberListDto {
  @ApiProperty()
  passportImg: string;

  @ApiProperty()
  ageRange: string;

  @ApiProperty()
  jobRole: string;

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
}

class CompanyCirle {
  @ApiProperty()
  id: string;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  activityLevel: string;

  @ApiProperty()
  coyCircleDescription: string;

  @ApiProperty()
  coyCircleName: string;

  @ApiProperty()
  companyUserId: string;

  @ApiProperty()
  wellbeingScore: string;

  @ApiProperty()
  coyCircleStatus: string;

  @ApiProperty()
  coyCircleNos: string;

  @ApiProperty()
  memberList: MemberListDto;
}

export class IGetCompanyCircle extends GenericResponse {
  @ApiProperty()
  data: CompanyCirle;
}

export class IGetAllCompanyCircle extends GenericResponse {
  @ApiProperty()
  total: number;

  @ApiProperty()
  total_pages: number;

  @ApiProperty()
  current_page: number;

  @ApiProperty()
  page_size: number;

  @ApiProperty()
  comapnyCircle_list: CompanyCirle[];
}
