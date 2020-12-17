import { Inject, Injectable } from '@nestjs/common';
import sequelize from 'sequelize';
import { Sequelize } from 'sequelize';
import { databaseDAOKey } from 'src/common/database/database.provider';
import { Part } from 'src/common/entity/part.entity';
import { Puc_configuration_data } from 'src/common/entity/puc_configuration_data.entity';
import { Referential_ecu_diagitems } from 'src/common/entity/referential_ecu_diagitems.entity';
import { referentialEcuDaoKey } from 'src/common/entity/referential_ecu_diagitems.provider';
import { EcuDiagitemsWithPucConfigDataWithPart } from 'src/model/EcuDiagitemsWithPucConfigDataWithPart.model';

@Injectable()
export class ReferentialEcuDiagitemsService {
  constructor(
    @Inject(referentialEcuDaoKey)
    private referentialEcuDiagItemsDao: typeof Referential_ecu_diagitems,
    @Inject(databaseDAOKey)
    private databaseDao: Sequelize,
  ) {}

  //   getReferentialEcuDiagitems(): Promise<Referential_ecu_diagitems[]> {

  //     return this.referentialEcuDiagItemsDao.findAll();
  //   }
  //

  getEcuDiagitemsWithPucConfigDataWithPart(): Promise<
    Referential_ecu_diagitems[]
  > {
    return this.referentialEcuDiagItemsDao.findAll({
      include: [Part, Puc_configuration_data],
    });

    // // return this.databaseDao.query(
    // //   `
    // //   SELECT * FROM referential_ecu_diagitems_options_2_software_parts AS ecu
    // //   INNER JOIN puc_configuration_data AS puc
    // //   ON ecu.puc_id = puc.id
    // //   INNER JOIN parts AS pa ON pa.part_nr = ecu.royalty_part_nr;`,
    // //   { type: sequelize.QueryTypes.SELECT },
    // );
  }
}
