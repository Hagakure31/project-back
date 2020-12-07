import { Inject, Injectable } from '@nestjs/common';
import sequelize from 'sequelize';
import { Sequelize } from 'sequelize';
import { databaseDAOKey } from 'src/common/database/database.provider';
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
   
getEcuDiagitemsWithPucConfigDataWithPart(): Promise<EcuDiagitemsWithPucConfigDataWithPart[]> {

      return this.databaseDao.query(`
      SELECT * FROM referential_ecu_diagitems_options_2_software_parts AS ecu 
      INNER JOIN puc_configuration_data AS puc 
      ON ecu.config_diagitem = puc.config_diagitem AND ecu.ecu_name = puc.ecu_name AND ecu.option_valuewrite = puc.option_valuewrite 
      INNER JOIN parts AS pa ON pa.part_nr = ecu.royalty_part_nr;`, 
      { type: sequelize.QueryTypes.SELECT});
    }
}
