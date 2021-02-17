import { Body, Controller, Get, Post } from '@nestjs/common';
import { Referential_ecu_diagitems } from '../../common/entity/referential_ecu_diagitems.entity';
import { ReferentialEcuDiagitemsService } from './referential_ecu_diagitems.service';

@Controller('referential_ecu_diagitems')
export class ReferentialEcuDiagitemsControler {
  constructor(
    private readonly referentialEcuDiagitemsService: ReferentialEcuDiagitemsService,
  ) {}

  @Get()
  getReferentialEcuDiagitems(): Promise<Referential_ecu_diagitems[]> {
    return this.referentialEcuDiagitemsService.getEcuDiagitemsWithPucConfigDataWithPart();
  }

  @Post()
  async create(@Body() body): Promise<any> {
    const thisPost = await this.referentialEcuDiagitemsService.create(body);
    return this.referentialEcuDiagitemsService.getEcuDiagitemWithPucConfigDataWithPartById(
      thisPost.id,
    );
  }
}
