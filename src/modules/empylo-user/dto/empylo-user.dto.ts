import { ApiProperty } from "@nestjs/swagger";
import {
  IsAlpha,
  IsArray,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUUID,
  Length,
} from "class-validator";

export class AddAdminUSerDto {
  @ApiProperty()
  @IsNotEmpty({ message: "First name cannot be empty." })
  @IsAlpha()
  firstName: string;

  @ApiProperty()
  @IsNotEmpty({ message: "Last name cannot be empty." })
  @IsAlpha()
  lastName: string;

  @ApiProperty({ example: "test@gmail.com" })
  @IsEmail({}, { message: "Email must be a valid email address." })
  email: string;

  @IsArray()
  @IsString({
    each: true,
    message: "Each item in the permissions list must be a string.",
  })
  permissions: string[];

  @ApiProperty({
    example: "admin",
    enum: ["admin", "superAdmin"],
  })
  @IsString({ message: "Role must be a string." })
  role: string;
}

export class GetAllAdminUserDto {
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
  gender: string;

  @ApiProperty({ example: "08-12-2023", required: false })
  created_at: string;

  @ApiProperty({
    example: "active",
    required: false,
    enum: ["active", "inactive"],
  })
  status: string;

  @ApiProperty({ required: false })
  @Length(11, 11, {
    message: "Phone number must be at must be 11 characters long.",
  })
  phoneNumber: string;
}
