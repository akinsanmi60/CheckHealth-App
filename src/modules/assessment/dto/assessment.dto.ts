import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsNotEmpty, IsString, IsUUID } from "class-validator";

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

  @ApiProperty({ example: "company or personal" })
  @IsNotEmpty({ message: "Circle type cannot be empty." })
  @IsString()
  circleType: string;

  @ApiProperty({ example: "34" })
  @IsNotEmpty({ message: "Score cannot be empty." })
  @IsString()
  scoreOnAttempt: string;

  @ApiProperty({ example: "weekly or dailyChecdkin" })
  @IsNotEmpty({ message: "Assessment  type cannot be empty." })
  @IsString()
  assessmentType: string;

  @IsUUID("4", { message: "ID must be a valid UUID." })
  @ApiProperty({
    example: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    required: false,
  })
  circleId: string;
}
