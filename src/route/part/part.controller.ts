import { Controller, Get } from '@nestjs/common';
import { Part } from 'src/common/entity/part.entity';
import { PartService } from './part.service';


@Controller('part')
export class PartController {
  constructor(private readonly partService: PartService ) {}

  @Get()
  getPart(): Promise<Part[]> {
      return this.partService.getPart();
    
  }
}
