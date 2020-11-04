import { Controller, Get } from '@nestjs/common';
import { Puc_configuration_data } from "src/common/entity/puc_configuration_data.entity";
import { PucConfigurationDataService } from './puc_configuration_data.service';





@Controller('puc_configuration_data')
export class PucConfigurationDataControler {
  constructor(private readonly pucConfigurationDataService: PucConfigurationDataService ) {}

  @Get()
  getPuc(): Promise<Puc_configuration_data[]> {
      return this.pucConfigurationDataService.getPuc();
    
  }
}