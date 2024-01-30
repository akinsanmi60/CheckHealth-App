import { ApiProperty } from "@nestjs/swagger";
import {
  IsNotEmpty,
  IsAlpha,
  IsArray,
  IsString,
  IsUUID,
  IsNumber,
  Length,
} from "class-validator";

export class CompanyGettingStartedDto {
  @ApiProperty()
  @IsNotEmpty({ message: "Circle name cannot be empty." })
  circleName: string;

  @ApiProperty()
  @IsNotEmpty({ message: "Circle description cannot be empty." })
  @IsAlpha()
  circleDescription: string;

  @ApiProperty({
    example: ["akintunde60@gmail.com"],
    type: "array",
    items: { type: "string" },
    required: true,
    format: "array",
    isArray: true,
  })
  @IsArray()
  @IsString({
    each: true,
    message: "Each item in the participants list must be a string.",
  })
  participantsList: string[];
}

export class GetAllCirclesDto {
  @IsUUID("4", { message: "ID must be a valid UUID." })
  @ApiProperty({
    example: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
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
  @IsString()
  search: string;

  @ApiProperty({ example: "male", required: false })
  @IsString()
  activityLevel: string;

  @ApiProperty({ example: "08-12-2023", required: false })
  created_at: string;

  @ApiProperty({
    example: "active",
    required: false,
    enum: ["active", "inactive"],
  })
  coyCircleStatus: string;

  @ApiProperty({ required: false })
  @Length(11, 11, {
    message: "Phone number must be at must be 11 characters long.",
  })
  coyCircleNos: string;
}
