import { Inject, Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize';
import { databaseDAOKey } from 'src/common/database/database.provider';
import { Part } from 'src/common/entity/part.entity';
import { Puc_configuration_data } from 'src/common/entity/puc_configuration_data.entity';
import { pucDaoKey } from 'src/common/entity/puc_configuration_data.provider';
import { Referential_ecu_diagitems } from 'src/common/entity/referential_ecu_diagitems.entity';
import { referentialEcuDaoKey } from 'src/common/entity/referential_ecu_diagitems.provider';
import { EcuDiagitemsWithPucConfigDataWithPart } from 'src/model/EcuDiagitemsWithPucConfigDataWithPart.model';
import { v4 as uuidv4 } from 'uuid';
import { PucConfigurationDataService } from '../puc_configuration_data/puc_configuration_data.service';

@Injectable()
export class ReferentialEcuDiagitemsService {
  constructor(
    @Inject(referentialEcuDaoKey)
    private referentialEcuDiagItemsDao: typeof Referential_ecu_diagitems,
    @Inject(databaseDAOKey)
    private databaseDao: Sequelize,
    private pucConfigurationDataService: PucConfigurationDataService,
  ) {}

  async create(newEntry): Promise<any> {
    console.log(newEntry);
    const selectedPucId = await this.pucConfigurationDataService.getPucId(
      newEntry,
    );
    return this.referentialEcuDiagItemsDao.create({
      id: uuidv4(),
      puc_id: selectedPucId,
      ecu_name: newEntry.ecu_name,
      config_diagitem: newEntry.config_diagitem,
      option_valuewrite: newEntry.option_valuewrite,
      royalty_part_nr: newEntry.royalty_part_nr,
      royalty_mtc_scr: '.',
      comment: newEntry.Comment,
    });
  }

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

  getEcuDiagitemWithPucConfigDataWithPartById(
    id: string,
  ): Promise<Referential_ecu_diagitems> {
    return this.referentialEcuDiagItemsDao.findOne({
      include: [Part, Puc_configuration_data],
      where: {
        id: id,
      },
    });
  }
}
