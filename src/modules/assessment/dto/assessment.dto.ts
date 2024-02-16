import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsNotEmpty, IsString } from "class-validator";

export class CreateAssessmentDto {
  @ApiProperty({ example: "week 1 or Day 1" })
  @IsNotEmpty({ message: "Set number cannot be empty." })
  @IsString()
  setNo: string;

  @ApiProperty({ example: "weekly or dailyChecdkin" })
  @IsNotEmpty({ message: "Assessment  type cannot be empty." })
  @IsString()
  assessmentType: string;

  @ApiProperty({ example: [""] })
  @IsNotEmpty({ message: "Questions cannot be empty." })
  @IsArray()
  setQuestions: string[];
}

export class CalculateDto {
  @ApiProperty({ example: "week 1 or Day 1" })
  @IsNotEmpty({ message: "Set number cannot be empty." })
  @IsString()
  setNo: string;

  @ApiProperty({ example: "34" })
  @IsNotEmpty({ message: "Score cannot be empty." })
  @IsString()
  scoreOnAttempt: string;

  @ApiProperty({ example: "weekly or dailyChecdkin" })
  @IsNotEmpty({ message: "Assessment  type cannot be empty." })
  @IsString()
  assessmentType: string;
}
