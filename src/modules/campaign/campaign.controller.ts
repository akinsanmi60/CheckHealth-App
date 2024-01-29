import { Controller, Get } from "@nestjs/common";
import { CampaignService } from "./campaign.service";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";

@ApiTags("Campaign")
@ApiBearerAuth()
@Controller("campaign")
export class CampaignController {
  constructor(private readonly campaignService: CampaignService) {}

  @Get()
  getHello(): string {
    return this.campaignService.getHello();
  }
}
