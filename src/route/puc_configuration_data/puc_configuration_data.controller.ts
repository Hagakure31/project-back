import { Controller, Get, Param, Query, Req } from '@nestjs/common';
import { get } from 'http';
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

  // @Get('config_diagitems')
  // getAllConfigDiagitems(): Promise<string[]> {
  //   return this.pucConfigurationDataService.getEcuNames();
  // }

  @Get('config_diagitems')
  async getConfigDiagitems(@Query() query): Promise<string[]> {
    console.log(query);
    return this.pucConfigurationDataService.getConfigDiagitems(query);
  }

  @Get('option_valuewrite')
  async getOptionValuewrite(@Query() query): Promise<string[]> {
    console.log(query);
    return this.pucConfigurationDataService.getOptionValuewrite(query);
  }

  @Get('option_text')
  async getOptionText(@Query() query): Promise<any> {
    const selectedOptionText = await this.pucConfigurationDataService.getOptionText(
      query,
    );
    return { selectedOptionText: selectedOptionText };
  }

  // @Get('config_diagitems/:ecu_name')
  // getConfigDiagitems(@Param('ecu_name') ecu_name): Promise<string[]> {
  //   return this.pucConfigurationDataService.getConfigDiagitems(ecu_name);
  // }

  @Get('id')
  async getPucId(@Query() query): Promise<any> {
    const selectedPucId = await this.pucConfigurationDataService.getPucId(
      query,
    );
    return { selectedPucId: selectedPucId };
  }
}
