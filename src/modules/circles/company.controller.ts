import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common";
import {
  ApiTags,
  ApiBearerAuth,
  // ApiConsumes,
  ApiParam,
  ApiBody,
  ApiResponse,
  ApiQuery,
} from "@nestjs/swagger";
import { CirclesService } from "./company-circles.service";
import { FileInterceptor } from "@nestjs/platform-express";
import { Express } from "express";
import { fileMimetypeFilter } from "../../filter/file-mimetype/file--mimetype-filter";
import { MAX_IMAGE_SIZE } from "../../filter/file-mimetype/file-config";
import {
  AddMemberToCircleDto,
  CompanyGettingStartedDto,
  GetAllCirclesDto,
} from "./dto/company.dto";
import { GenericResponse } from "src/auth/dto/auth-response.dto";
import {
  IGetAllCompanyCircle,
  IGetCompanyCircle,
} from "./dto/company-response.dto";

@ApiTags("Company")
@ApiBearerAuth()
@Controller("company")
export class CirclesController {
  constructor(private readonly circlesService: CirclesService) {}

  @Post("/:id/create-circle")
  @UseInterceptors(
    FileInterceptor("file", {
      fileFilter: fileMimetypeFilter(["image/jpeg", "image/png", "image/jpg"]),
      limits: { fileSize: MAX_IMAGE_SIZE },
    }),
  )
  @ApiParam({ name: "id", type: "string" })
  @ApiBody({
    type: CompanyGettingStartedDto,
    description:
      "Creating a circle for a company. Note append the file to the formData when posting",
  })
  createCirlce(
    @UploadedFile() file: Express.Multer.File,
    @Body() dto,
    @Param("id") id: string,
  ) {
    return this.circlesService.createCirlce(dto, id, file);
  }

  @Post("/:id/deactivate/comapny-circle")
  @ApiParam({ name: "id", type: "string" })
  @ApiResponse({
    type: GenericResponse,
    description: "Deactivating a company circle",
  })
  deactivateCompanyCircle(@Param("id") id: string) {
    return this.circlesService.deactivateCompanyCircle(id);
  }

  @Post("/:id/activate/comapny-circle")
  @ApiParam({ name: "id", type: "string" })
  @ApiResponse({
    type: GenericResponse,
    description: "Activating a company circle",
  })
  activateCompanyCircle(@Param("id") id: string) {
    return this.circlesService.activateCompanyCircle(id);
  }

  @Get("/:id/get-company-circle")
  @ApiParam({ name: "id", type: "string" })
  @ApiResponse({
    type: IGetCompanyCircle,
    description: "Get a company circle",
  })
  getCompanyCircleById(@Param("id") id: string) {
    return this.circlesService.getCompanyCircleById(id);
  }

  @Get("/allcompany-circles")
  @ApiResponse({
    type: IGetAllCompanyCircle,
  })
  @ApiQuery({
    type: GetAllCirclesDto,
  })
  getAllCompanyCircles(@Query() dto) {
    return this.circlesService.getAllCompanyCircles(dto);
  }

  @Delete("/:id/delete-company-circle")
  @ApiParam({ name: "id", type: "string" })
  @ApiResponse({
    type: GenericResponse,
  })
  deleteCompanyCircle(@Param("id") id: string) {
    return this.circlesService.deleteCompanyCircle(id);
  }

  @Post("/:id/addmember-company-circle")
  @ApiParam({ name: "id", type: "string" })
  @ApiResponse({
    type: GenericResponse,
  })
  @ApiBody({
    type: AddMemberToCircleDto,
  })
  addMemberToCircle(@Param("id") id: string, @Body() dto) {
    return this.circlesService.addMemberToCircle(id, dto);
  }
}
