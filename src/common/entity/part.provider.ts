import { Part } from './part.entity';

export const partDaoKey = 'PartDAO';
export const partDaoProvider = [
    {
      provide: partDaoKey,
      useValue: Part,
    },
  ];
