import {
  Global,
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { AuthMiddleware } from './common/middleware/auth.middleware';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './common/database/database.module';
import { partDaoProvider } from './common/entity/part.provider';
import { PartController } from './route/part/part.controller';
import { PartService } from './route/part/part.service';
import { pucDaoProvider } from './common/entity/puc_configuration_data.provider';
import { PucConfigurationDataControler } from './route/puc_configuration_data/puc_configuration_data.controller';
import { PucConfigurationDataService } from './route/puc_configuration_data/puc_configuration_data.service';
import { referentialEcuProvider } from './common/entity/referential_ecu_diagitems.provider';
import { ReferentialEcuDiagitemsService } from './route/referential_ecu_diagitems/referential_ecu_diagitems.service';
import { ReferentialEcuDiagitemsControler } from './route/referential_ecu_diagitems/referential_ecu_diagitems.controller';
import { AuthModule } from './route/auth/auth.module';
import { UsersModule } from './route/users/users.module';
import { userDaoProvider } from './common/entity/user.provider';
import { ConfigService } from '@nestjs/config';
@Global()
@Module({
  exports: [...userDaoProvider],
  imports: [ConfigModule.forRoot(), DatabaseModule, AuthModule, UsersModule],
  controllers: [
    AppController,
    PartController,
    PucConfigurationDataControler,
    ReferentialEcuDiagitemsControler,
  ],
  providers: [
    AppService,
    ...partDaoProvider,
    PartService,
    ...pucDaoProvider,
    PucConfigurationDataService,
    ...referentialEcuProvider,
    ReferentialEcuDiagitemsService,
    ...userDaoProvider,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude(
        { path: 'auth', method: RequestMethod.POST },
        { path: 'register', method: RequestMethod.POST },
      )
      .forRoutes({
        path: '*',
        method: RequestMethod.ALL,
      });
  }
}
