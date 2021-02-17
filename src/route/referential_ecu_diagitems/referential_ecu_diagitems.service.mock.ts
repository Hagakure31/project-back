import { Referential_ecu_diagitems } from '../../common/entity/referential_ecu_diagitems.entity';

export class ReferentialEcuDiagitemsServiceMock {
  async create(newEntry): Promise<any> {
    return Promise.resolve(null);
  }

  getEcuDiagitemsWithPucConfigDataWithPart(): Promise<
    Referential_ecu_diagitems[]
  > {
    return Promise.resolve(null);
  }

  getEcuDiagitemWithPucConfigDataWithPartById(
    id: string,
  ): Promise<Referential_ecu_diagitems> {
    return Promise.resolve(null);
  }
}
