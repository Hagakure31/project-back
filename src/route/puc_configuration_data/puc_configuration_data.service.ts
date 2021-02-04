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

  getAllConfigDiagitems(): Promise<string[]> {
    return this.pucDao
      .findAll({
        attributes: [
          [Sequelize.literal('DISTINCT config_diagitem'), 'config_diagitem'],
        ],
      })
      .then(response => response.map(data => data.config_diagitem));
  }

  getConfigDiagitems(selectedEcu: Record<string, unknown>): Promise<string[]> {
    return this.pucDao
      .findAll({
        attributes: [
          [Sequelize.literal('DISTINCT config_diagitem'), 'config_diagitem'],
        ],
        where: {
          ecu_name: selectedEcu.ecu_name,
        },
      })
      .then(response => response.map(data => data.config_diagitem));
  }

  getOptionValuewrite(selectedParams: any): Promise<string[]> {
    return this.pucDao
      .findAll({
        attributes: [
          [
            Sequelize.literal('DISTINCT option_valuewrite'),
            'option_valuewrite',
          ],
        ],
        where: {
          ecu_name: selectedParams.ecu_name,
          config_diagitem: selectedParams.config_diagitem,
        },
      })
      .then(response => response.map(data => data.option_valuewrite));
  }

  getOptionText(selectedParams: any): Promise<string[]> {
    return this.pucDao
      .findAll({
        attributes: [
          [Sequelize.literal('DISTINCT option_text'), 'option_text'],
        ],
        where: {
          ecu_name: selectedParams.ecu_name,
          config_diagitem: selectedParams.config_diagitem,
          option_valuewrite: selectedParams.option_valuewrite,
        },
      })
      .then(response => response.map(data => data.option_text));
  }

  getPucId(selectedParams): Promise<string> {
    return this.pucDao
      .findOne({
        where: {
          ecu_name: selectedParams.ecu_name,
          config_diagitem: selectedParams.config_diagitem,
          option_valuewrite: selectedParams.option_valuewrite,
        },
      })
      .then(response => response.id);
  }
}
