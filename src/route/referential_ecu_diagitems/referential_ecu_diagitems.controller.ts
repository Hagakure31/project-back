import { Controller, Get } from '@nestjs/common';
import { Referential_ecu_diagitems } from 'src/common/entity/referential_ecu_diagitems.entity';
import { EcuDiagitemsWithPucConfigDataWithPart } from 'src/model/EcuDiagitemsWithPucConfigDataWithPart.model';
import { ReferentialEcuDiagitemsService } from './referential_ecu_diagitems.service';

@Controller('referential_ecu_diagitems')
export class ReferentialEcuDiagitemsControler {
  constructor(
    private readonly referentialEcuDiagitemsService: ReferentialEcuDiagitemsService,
  ) {}

  @Get()
  getReferentialEcuDiagitems(): Promise<EcuDiagitemsWithPucConfigDataWithPart[]> {
    return this.referentialEcuDiagitemsService.getEcuDiagitemsWithPucConfigDataWithPart();
  }
}
