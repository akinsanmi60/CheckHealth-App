import { ApiProperty } from "@nestjs/swagger";
import {
  IsNotEmpty,
  IsAlpha,
  IsArray,
  //   ArrayNotEmpty,
  IsString,
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
    type: "array",
    items: {
      type: "string",
      example: "akintunde60@gmail.com",
    },
  })
  @IsArray()
  @IsString({
    each: true,
    message: "Each item in the participants list must be a string.",
  })
  readonly participantsList: string[];

  @ApiProperty({
    type: "string",
    format: "binary",
  })
  file: Express.Multer.File;
}
