import { ApiProperty } from "@nestjs/swagger";
import {
  IsAlpha,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  Length,
  MinLength,
} from "class-validator";

export class LoginDto {
  @ApiProperty({ example: "test1@example.com" })
  @IsEmail({}, { message: "Please provide a valid email address." })
  email: string;

  @ApiProperty({ example: "testingPassword" })
  @IsNotEmpty({ message: "Password cannot be empty." })
  @MinLength(6, { message: "Password must be at least 6 characters long." })
  password: string;
}

export class VerifyEmailDto {
  @ApiProperty({ example: "8734" })
  @IsNotEmpty({ message: "Code cannot be empty." })
  @Length(4, 4, { message: "Code must be 4 characters" })
  code: string;
}

export class CompanyGettingStartedDto {
  @ApiProperty()
  @IsEmail({}, { message: "Please provide a valid email address." })
  @IsNotEmpty({ message: "Email cannot be empty." })
  email: string;

  @ApiProperty()
  @IsNotEmpty({ message: "Company name cannot be empty." })
  @IsAlpha()
  @IsNotEmpty({ message: "Company name cannot be empty." })
  companyName: string;

  @ApiProperty()
  @IsNotEmpty({ message: "Company address cannot be empty." })
  @IsAlpha()
  @IsNotEmpty({ message: "Company address cannot be empty." })
  address: string;

  @ApiProperty()
  @IsNotEmpty({ message: "Company address cannot be empty." })
  @IsAlpha()
  @IsNotEmpty({ message: "Company state cannot be empty." })
  addressState: string;

  @ApiProperty()
  @IsNotEmpty({ message: "Company address cannot be empty." })
  @IsAlpha()
  @IsNotEmpty({ message: "Company city cannot be empty." })
  addressCity: string;

  @ApiProperty()
  @IsAlpha()
  @IsNotEmpty({ message: "Password cannot be empty." })
  password: string;

  @ApiProperty()
  @IsAlpha()
  @IsNotEmpty({ message: "Indusstry cannot be empty." })
  industry: string;

  @ApiProperty()
  @IsAlpha()
  @IsOptional()
  website: string;

  @ApiProperty()
  @IsAlpha()
  @IsNotEmpty({ message: "Company description cannot be empty." })
  companyDescription: string;

  @ApiProperty()
  @IsAlpha()
  @IsNotEmpty({ message: "Terms and conditions cannot be unchecked." })
  termsConditions: boolean;
}
export class GettingStartedUpdateProfileDto {
  @ApiProperty()
  @IsNotEmpty({ message: "First name cannot be empty." })
  @IsAlpha()
  firstName: string;

  @ApiProperty()
  @IsNotEmpty({ message: "Last name cannot be empty." })
  @IsAlpha()
  lastName: string;

  @ApiProperty()
  @IsAlpha()
  @IsNotEmpty({ message: "Age range cannot be empty." })
  ageRange: string;

  @ApiProperty()
  @IsAlpha()
  @IsNotEmpty({ message: "Ethnicity cannot be empty." })
  ethnicity: string;

  @ApiProperty()
  @IsAlpha()
  @IsNotEmpty({ message: "Marital status cannot be empty." })
  maritalStatus: string;

  @ApiProperty()
  @IsAlpha()
  @IsOptional()
  department: string;

  @ApiProperty()
  @IsAlpha()
  @IsOptional()
  jobRole: string;

  @ApiProperty()
  @IsAlpha()
  @IsNotEmpty({ message: "Account type cannot be empty." })
  accountType: string;

  @ApiProperty()
  @IsAlpha()
  @IsNotEmpty({ message: "Gender cannot be empty." })
  gender: string;

  @ApiProperty()
  @IsAlpha()
  @IsNotEmpty({ message: "Date of birth cannot be empty." })
  DOB: string;

  @ApiProperty()
  @IsAlpha()
  @IsNotEmpty({ message: "Address cannot be empty." })
  address: string;

  @ApiProperty()
  @IsAlpha()
  @IsNotEmpty({ message: "Disability cannot be empty." })
  disability: string;

  @ApiProperty()
  @IsAlpha()
  @IsNotEmpty({ message: "Passport cannot be empty." })
  passportImg: string;
}

export class UserGettingStartedDto extends LoginDto {
  @ApiProperty()
  @IsAlpha()
  @IsNotEmpty({ message: "Terms and conditions cannot be unchecked." })
  termsConditions: boolean;
}

export class ForgotPasswordDto {
  @ApiProperty()
  @IsEmail({}, { message: "Please provide a valid email address." })
  @IsNotEmpty({ message: "Email cannot be empty." })
  email: string;
}

export class ResetPasswordDto extends VerifyEmailDto {
  @ApiProperty({ example: "120945" })
  @IsNotEmpty({ message: "Code cannot be empty." })
  @Length(6, 6, { message: "Code must be 6 characters" })
  code: string;

  @ApiProperty({ example: "test1@example" })
  @IsNotEmpty({ message: "Password cannot be empty." })
  @MinLength(6, { message: "Password must be at least 6 characters long." })
  new_password: string;
}

export class CreatePasswordDto extends VerifyEmailDto {
  @ApiProperty({ example: "test1@example" })
  @IsNotEmpty({ message: "Password cannot be empty." })
  @MinLength(8, { message: "Password must be at least 8 characters long." })
  password: string;
}

export class GetAllUserDto {
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
  phone_number: string;

  @ApiProperty({
    example: "verified",
    required: false,
    enum: ["verified", "unverified"],
  })
  account_status: string;
}

export class ChangePasswordDto {
  @ApiProperty()
  @IsNotEmpty({ message: "Password cannot be empty." })
  @MinLength(8, { message: "Password must be at least 8 characters long." })
  current_password: string;

  @ApiProperty()
  @IsNotEmpty({ message: "Password cannot be empty." })
  @MinLength(8, { message: "Password must be at least 8 characters long." })
  new_password: string;
}
