import {
  Body,
  Controller,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common";
import {
  ApiTags,
  ApiBearerAuth,
  ApiConsumes,
  ApiParam,
  ApiBody,
} from "@nestjs/swagger";
import { CirclesService } from "./circles.service";
import { FileInterceptor } from "@nestjs/platform-express";
import { Express } from "express";
import { fileMimetypeFilter } from "../../filter/file-mimetype/file--mimetype-filter";
import { MAX_IMAGE_SIZE } from "../../filter/file-mimetype/file-config";
import { CompanyGettingStartedDto } from "./dto/circle.dto";

@ApiTags("Circles")
@ApiBearerAuth()
@Controller("circles")
export class CirclesController {
  constructor(private readonly circlesService: CirclesService) {}

  @Post("/:id/create-circle")
  @ApiConsumes("multipart/form-data")
  @UseInterceptors(
    FileInterceptor("file", {
      fileFilter: fileMimetypeFilter(["image/jpeg", "image/png", "image/jpg"]),
      limits: { fileSize: MAX_IMAGE_SIZE },
    }),
  )
  @ApiParam({ name: "id", type: "string" })
  @ApiBody({
    type: CompanyGettingStartedDto,
  })
  createCirlce(
    @UploadedFile() file: Express.Multer.File,
    @Body() dto,
    @Param("id") id: string,
  ) {
    return this.circlesService.createCirlce(dto, id, file);
  }
}
