import { Inject, Injectable } from '@nestjs/common';
import { Part } from 'src/common/entity/part.entity';
import { partDaoKey } from 'src/common/entity/part.provider';

@Injectable()
export class PartService {
  constructor(@Inject (partDaoKey) private partDao: typeof Part){}
    
  
   getPart(): Promise<Part[]> {
    return this.partDao.findAll();
  }

}