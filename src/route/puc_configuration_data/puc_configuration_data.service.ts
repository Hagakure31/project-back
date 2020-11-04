import { Inject, Injectable } from '@nestjs/common';
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
}
