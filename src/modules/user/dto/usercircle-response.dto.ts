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

class UserCirle {
  @ApiProperty()
  id: string;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  activityLevel: string;

  @ApiProperty()
  userCircleDescription: string;

  @ApiProperty()
  userCircleName: string;

  @ApiProperty()
  userId: string;

  @ApiProperty()
  wellbeingScore: string;

  @ApiProperty()
  userCircleStatus: string;

  @ApiProperty()
  userCircleNos: string;

  @ApiProperty()
  memberList: MemberListDto;
}

export class IGetUserCircle extends GenericResponse {
  @ApiProperty()
  data: UserCirle;
}

export class IGetAllUserCircle extends GenericResponse {
  @ApiProperty()
  total: number;

  @ApiProperty()
  total_pages: number;

  @ApiProperty()
  current_page: number;

  @ApiProperty()
  page_size: number;

  @ApiProperty()
  userCircle_list: UserCirle[];
}
