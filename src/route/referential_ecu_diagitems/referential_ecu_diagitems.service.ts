import { Inject, Injectable } from '@nestjs/common';
import { Referential_ecu_diagitems } from 'src/common/entity/referential_ecu_diagitems.entity';
import { referentialEcuDaoKey } from 'src/common/entity/referential_ecu_diagitems.provider';

@Injectable()
export class ReferentialEcuDiagitemsService {
  constructor(
    @Inject(referentialEcuDaoKey)
    private referentialEcuDiagItemsDao: typeof Referential_ecu_diagitems,
  ) {}

  getReferentialEcuDiagitems(): Promise<Referential_ecu_diagitems[]> {

    return this.referentialEcuDiagItemsDao.findAll();
  }
}
