import { ConfigService } from '@nestjs/config';
import { Sequelize } from 'sequelize-typescript';
import { Part } from '../entity/part.entity';
import { Puc_configuration_data } from '../entity/puc_configuration_data.entity';
import { Referential_ecu_diagitems } from '../entity/referential_ecu_diagitems.entity';


export const databaseDAOKey = 'SEQUELIZE';
export const databaseProvider = [
  {
    provide: databaseDAOKey,
    useFactory: async (configService : ConfigService) => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: configService.get<string>('DATABASE_HOST'),
        port: configService.get<number>('DATABASE_PORT'),
        username: configService.get<string>('DATABASE_USER'),
        password: configService.get<string>('DATABASE_PASSWORD'),
        database: configService.get<string>('DATABASE_NAME'),
      });
      
      sequelize.addModels([Part, Puc_configuration_data, Referential_ecu_diagitems]);
      await sequelize.sync();
      return sequelize;
    },
    inject: [ConfigService],
  },
];