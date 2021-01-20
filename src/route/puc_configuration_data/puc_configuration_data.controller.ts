import { Controller, Get, Param, Query, Req } from '@nestjs/common';
import { Puc_configuration_data } from 'src/common/entity/puc_configuration_data.entity';
import { PucConfigurationDataService } from './puc_configuration_data.service';

@Controller('puc_configuration_data')
export class PucConfigurationDataControler {
  constructor(
    private readonly pucConfigurationDataService: PucConfigurationDataService,
  ) {}

  @Get()
  getPuc(): Promise<Puc_configuration_data[]> {
    return this.pucConfigurationDataService.getPuc();
  }

  @Get('ecu_names')
  getEcuNames(): Promise<string[]> {
    return this.pucConfigurationDataService.getEcuNames();
  }

  @Get('config_diagitems')
  getAllConfigDiagitems(): Promise<string[]> {
    return this.pucConfigurationDataService.getEcuNames();
  }

  @Get('config_diagitems/:ecu_name')
  getConfigDiagitems(@Param('ecu_name') ecu_name): Promise<string[]> {
    return this.pucConfigurationDataService.getConfigDiagitems(ecu_name);
  }
}
