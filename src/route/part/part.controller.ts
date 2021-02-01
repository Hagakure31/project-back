import { Controller, Get, Query } from '@nestjs/common';
import { Part } from 'src/common/entity/part.entity';
import { PartService } from './part.service';

@Controller('parts')
export class PartController {
  constructor(private readonly partService: PartService) {}

  @Get()
  getParts(): Promise<Part[]> {
    return this.partService.getParts();
  }

  @Get('parts_nr')
  getEcuNames(): Promise<string[]> {
    return this.partService.getRoyaltyPartNumbers();
  }

  @Get('part_descriptions')
  async getPartDescriptions(@Query() query): Promise<any> {
    const description = await this.partService.getPartDescriptions(query);
    return { descriptionFr: description[0], descriptionEn: description[1] };
  }
}
