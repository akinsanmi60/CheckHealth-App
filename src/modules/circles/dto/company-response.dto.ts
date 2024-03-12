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

class IGetCoyCirlceTotalByCategoryData {
  @ApiProperty()
  allCircle: number;

  @ApiProperty()
  completedCircle: number;

  @ApiProperty()
  ongoingCircle: number;

  @ApiProperty()
  unenrolledCircle: number;
}

export class IGetCoyCirlceTotalByCategory extends GenericResponse {
  @ApiProperty()
  data: IGetCoyCirlceTotalByCategoryData;
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

class IGetTotalCircleInMonthData {
  @ApiProperty()
  month: string;

  @ApiProperty()
  totalCircleCount: number;

  @ApiProperty()
  totalWellbeing: number;
}

class IGetTotalCircleInYearWithMonthData {
  @ApiProperty()
  month: string;

  @ApiProperty()
  totalCompletedCircle: number;

  @ApiProperty()
  totalOngoingCircle: number;

  @ApiProperty()
  totalUnenrolledCircle: number;
}

export class IGetTotalCircleInMonth extends GenericResponse {
  @ApiProperty({
    type: IGetTotalCircleInMonthData,
    isArray: true,
  })
  data: IGetTotalCircleInMonthData[];
}

export class IGetTotalCircleInYearWithMonth extends GenericResponse {
  @ApiProperty({
    type: IGetTotalCircleInYearWithMonthData,
    isArray: true,
  })
  data: IGetTotalCircleInYearWithMonthData[];
}
