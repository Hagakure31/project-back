import { Puc_configuration_data } from './puc_configuration_data.entity';


export const pucDaoKey = 'PucDAO';
export const pucDaoProvider = [
    {
      provide: pucDaoKey,
      useValue: Puc_configuration_data,
    },
  ];
