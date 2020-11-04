import { Controller, Get } from '@nestjs/common';
import { Referential_ecu_diagitems } from 'src/common/entity/referential_ecu_diagitems.entity';
import { ReferentialEcuDiagitemsService } from './referential_ecu_diagitems.service';

@Controller('referential_ecu_diagitems')
export class ReferentialEcuDiagitemsControler {
  constructor(
    private readonly referentialEcuDiagitemsService: ReferentialEcuDiagitemsService,
  ) {}

  @Get()
  getReferentialEcuDiagitems(): Promise<Referential_ecu_diagitems[]> {
    return this.referentialEcuDiagitemsService.getReferentialEcuDiagitems();
  }
}
