import { Test } from '@nestjs/testing';
import { ReferentialEcuDiagitemsService } from './referential_ecu_diagitems.service';
import { ReferentialEcuDiagitemsControler } from './referential_ecu_diagitems.controller';
import { Referential_ecu_diagitems } from '../../common/entity/referential_ecu_diagitems.entity';
import { ReferentialEcuDiagitemsServiceMock } from './referential_ecu_diagitems.service.mock';

describe('ReferentialEcuDiagitemsControler', () => {
  let referentialEcuDiagitemsController: ReferentialEcuDiagitemsControler;
  let referentialEcuDiagitemsService: ReferentialEcuDiagitemsService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [ReferentialEcuDiagitemsControler],
      providers: [ReferentialEcuDiagitemsService],
    })
      .overrideProvider(ReferentialEcuDiagitemsService)
      .useClass(ReferentialEcuDiagitemsServiceMock)
      .compile();

    referentialEcuDiagitemsService = moduleRef.get<
      ReferentialEcuDiagitemsService
    >(ReferentialEcuDiagitemsService);
    referentialEcuDiagitemsController = moduleRef.get<
      ReferentialEcuDiagitemsControler
    >(ReferentialEcuDiagitemsControler);
  });

  describe('create', () => {
    it('should create a new referential_ecu_diagitems', async () => {
      const body = {
        ecu_name: 'FRA',
        config_diagitem: 'XPO_OXP',
        option_valuewrite: '12093',
        royalty_part_nr: '204961249R',
        Comment: 'un commentaire',
      };
      const result: Referential_ecu_diagitems = {
        id: '8463c287-b7a5-45d6-9ef1-89e2b8427d3d',
        puc_id: '7b75c294-dd61-42d8-9736-ca9dff70cf7a',
        ecu_name: 'FRA',
        config_diagitem: 'XPO_OXP',
        option_valuewrite: '12093',
        royalty_part_nr: '204961249R',
        royalty_mtc_scr: '.',
        comment: 'un commentaire',
      } as Referential_ecu_diagitems;
      const resultPromise: Promise<Referential_ecu_diagitems> = Promise.resolve(
        result,
      );
      jest
        .spyOn(referentialEcuDiagitemsService, 'create')
        .mockImplementation(() => resultPromise);
      jest
        .spyOn(
          referentialEcuDiagitemsService,
          'getEcuDiagitemWithPucConfigDataWithPartById',
        )
        .mockImplementation(() => resultPromise);
      expect(await referentialEcuDiagitemsController.create(body)).toBe(result);
    });
  });
});
