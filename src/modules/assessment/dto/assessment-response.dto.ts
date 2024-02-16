import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString, IsUUID } from "class-validator";
import { GenericResponse } from "src/auth/dto/auth-response.dto";

class EmpyloUserObj {
  @ApiProperty()
  id: string;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  passportImg: string;

  @ApiProperty()
  empyloID: string;
}

class AssessmentData {
  @ApiProperty()
  id: string;

  @ApiProperty()
  created_at: string;

  @ApiProperty()
  assessmentType: string;

  @ApiProperty()
  setNo: string;

  @ApiProperty()
  setQuestions: string[];

  @ApiProperty()
  empyloUser: EmpyloUserObj;
}

export class AssessmentResponseDto extends GenericResponse {
  @ApiProperty({ type: AssessmentData })
  data: AssessmentData;
}

export class AllAssessmentResponseDto extends GenericResponse {
  @ApiProperty({ type: [AssessmentData] })
  data: AssessmentData[];
}

export class GetAllAssessmentDto {
  @IsUUID("4", { message: "ID must be a valid UUID." })
  @ApiProperty({
    example: "",
    required: false,
  })
  id: string;

  @ApiProperty({ example: 1, required: false })
  @IsNumber()
  page: number;

  @ApiProperty({ example: 10, required: false })
  @IsNumber()
  limit: number;

  @ApiProperty({ example: "", required: false })
  created_at: string;

  @ApiProperty()
  @IsString()
  assessmentType: string;

  @ApiProperty()
  @IsString()
  setNo: string;
}
