import { ApiProperty } from "@nestjs/swagger";
import {
  IsNotEmpty,
  IsAlpha,
  IsArray,
  IsString,
  IsUUID,
  IsNumber,
  Length,
  IsEmail,
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

export class GetAllUserCirclesDto {
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

  @ApiProperty({
    example: "low",
    required: false,
    enum: ["low", "moderate", "high", "moderatelyHigh", "excellent"],
  })
  @IsString()
  activityLevel: string;

  @ApiProperty({ example: "08-12-2023", required: false })
  created_at: string;

  @ApiProperty({
    example: "active",
    required: false,
    enum: ["active", "inactive"],
  })
  userCircleStatus: string;

  @ApiProperty({ required: false })
  @Length(9, 9, {
    message: "Circle number must be at must be 9 characters long.",
  })
  userCircleNos: string;
}

export class GetSingleCirclesDto {
  @ApiProperty({ example: "3fa85f64-5717-4562-b3fc-2c963f66afa6" })
  @IsUUID("4", { message: "ID must be a valid UUID." })
  id: string;
}

export class AddMemberToCircleDto {
  @ApiProperty({ example: "test@gmail.com" })
  @IsEmail({}, { message: "Email must be a valid email address." })
  email: string;
}
