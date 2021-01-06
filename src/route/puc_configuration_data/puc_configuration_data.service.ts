import { Inject, Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';

import { Puc_configuration_data } from 'src/common/entity/puc_configuration_data.entity';
import { pucDaoKey } from 'src/common/entity/puc_configuration_data.provider';

@Injectable()
export class PucConfigurationDataService {
  constructor(
    @Inject(pucDaoKey) private pucDao: typeof Puc_configuration_data,
  ) {}

  getPuc(): Promise<Puc_configuration_data[]> {
    return this.pucDao.findAll();
  }

  getEcuNames(): Promise<string[]> {
    return this.pucDao
      .findAll({
        attributes: [[Sequelize.literal('DISTINCT ecu_name'), 'ecu_name']],
      })
      .then(response => response.map(data => data.ecu_name));
  }
}
