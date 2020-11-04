import { Referential_ecu_diagitems } from './referential_ecu_diagitems.entity';


export const referentialEcuDaoKey = 'ReferentialEcuDiagitemsDAO';
export const referentialEcuProvider = [
    {
      provide: referentialEcuDaoKey,
      useValue: Referential_ecu_diagitems,
    },
  ];