import { ApiProperty } from "@nestjs/swagger";
import {
  IsAlpha,
  IsAlphanumeric,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  Length,
  MinLength,
} from "class-validator";

export class BNVDto {
  @ApiProperty({ example: "12345679012" })
  @IsNotEmpty({ message: "BVN cannot be empty." })
  @Length(11, 11, { message: "BVN must be 11 characters" })
  @IsAlphanumeric()
  bvn_number: string;
}
export class LoginDto {
  @ApiProperty({ example: "test1@example.com" })
  @IsEmail({}, { message: "Please provide a valid email address." })
  email: string;

  @ApiProperty({ example: "testingPassword" })
  @IsNotEmpty({ message: "Password cannot be empty." })
  @MinLength(6, { message: "Password must be at least 6 characters long." })
  password: string;
}

export class PhoneVerifyDto {
  @ApiProperty({ example: "+2348123456789" })
  @Length(11, 11, {
    message: "Phone number must be at must be 11 characters long.",
  })
  phone_number: string;
}

export class GettingStartedDto extends PhoneVerifyDto {
  @ApiProperty()
  @IsEmail({}, { message: "Please provide a valid email address." })
  @IsNotEmpty({ message: "Email cannot be empty." })
  email: string;

  @ApiProperty()
  @IsNotEmpty({ message: "First name cannot be empty." })
  @IsAlpha()
  @IsNotEmpty({ message: "First name cannot be empty." })
  first_name: string;

  @ApiProperty()
  @IsNotEmpty({ message: "Last name cannot be empty." })
  @IsAlpha()
  last_name: string;

  @ApiProperty()
  @IsAlpha()
  @IsOptional()
  referral_code: string;

  @ApiProperty()
  @IsAlpha()
  @IsNotEmpty({ message: "Role cannot be empty." })
  role: string;
}

export class VerifyEmailDto {
  @ApiProperty({ example: "873412" })
  @IsNotEmpty({ message: "Code cannot be empty." })
  @Length(6, 6, { message: "Code must be 6 characters" })
  code: string;
}
export class ForgotPasswordDto extends PhoneVerifyDto {}
export class ForgotPasswordPhoneVerifyDto extends PhoneVerifyDto {
  @ApiProperty({ example: "239856" })
  @IsNotEmpty({ message: "Code cannot be empty." })
  @Length(6, 6, { message: "Code must be 6 characters" })
  code: string;
}
export class ResetPasswordDto extends PhoneVerifyDto {
  @ApiProperty({ example: "120945" })
  @IsNotEmpty({ message: "Code cannot be empty." })
  @Length(6, 6, { message: "Code must be 6 characters" })
  code: string;

  @ApiProperty({ example: "test1@example" })
  @IsNotEmpty({ message: "Password cannot be empty." })
  @MinLength(6, { message: "Password must be at least 6 characters long." })
  new_password: string;
}

export class CreatePasswordDto extends PhoneVerifyDto {
  @ApiProperty({ example: "test1@example" })
  @IsNotEmpty({ message: "Password cannot be empty." })
  @MinLength(8, { message: "Password must be at least 8 characters long." })
  password: string;
}

export class CreateTransactionPinDto extends PhoneVerifyDto {
  @ApiProperty({ example: "1234" })
  @IsNotEmpty({ message: "user_pin cannot be empty." })
  @MinLength(4, { message: "user_pin must be at least 4 characters long." })
  user_pin: string;
}

export class IdentityVerificationDto extends PhoneVerifyDto {
  @ApiProperty()
  @IsNotEmpty({ message: "User name cannot be empty." })
  user_name: string;

  @ApiProperty()
  @IsNotEmpty({ message: "Driver-license cannot be empty." })
  driver_license: string;

  @ApiProperty()
  @IsNotEmpty({ message: "Please add upload license image." })
  uploaded_license_img: string;

  @ApiProperty()
  @IsNotEmpty({ message: "NIN number cannot be empty." })
  @IsAlphanumeric()
  @Length(11, 11, { message: "NIN must be 11 characters" })
  nin_number: string;

  @ApiProperty()
  @IsNotEmpty({ message: "BVN number cannot be empty." })
  @IsAlphanumeric()
  @Length(11, 11, { message: "BVN must be 11 characters" })
  bvn: string;

  @ApiProperty()
  @IsNotEmpty({ message: "Please add NIN-Card image." })
  uploaded_nin_card: string;

  @ApiProperty()
  @IsNotEmpty({ message: "Please add NIN image." })
  @IsAlphanumeric()
  @Length(9, 9, { message: "NIN must be 9 characters" })
  passport_number: string;

  @ApiProperty()
  @IsNotEmpty({ message: "Please add passport image." })
  uploaded_passport_img: string;

  @ApiProperty()
  @IsNotEmpty({ message: "Gender cannot be empty." })
  @IsAlpha()
  gender: string;

  @ApiProperty()
  @IsNotEmpty({ message: "Please add  DOB." })
  @IsAlphanumeric()
  DOB: string;
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
