import { Inject, Injectable } from '@nestjs/common';
import { Part } from 'src/common/entity/part.entity';
import { partDaoKey } from 'src/common/entity/part.provider';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class PartService {
  constructor(@Inject(partDaoKey) private partDao: typeof Part) {}

  getParts(): Promise<Part[]> {
    return this.partDao.findAll();
  }

  getRoyaltyPartNumbers(): Promise<string[]> {
    return this.partDao
      .findAll({
        attributes: [[Sequelize.literal('DISTINCT part_nr'), 'part_nr']],
      })
      .then(response => response.map(data => data.part_nr));
  }

  getPartDescriptions(
    selectedRoyaltyPartNr: Record<string, unknown>,
  ): Promise<string[]> {
    return this.partDao
      .findOne({
        attributes: ['part_description_fr', 'part_description_en'],
        where: {
          part_nr: selectedRoyaltyPartNr.part_nr,
        },
      })
      .then(response => [
        response.part_description_fr,
        response.part_description_en,
      ]);
  }

  // getPartDescriptionFr(
  //   selectedRoyaltyPartNr: Record<string, unknown>,
  // ): Promise<string[]> {
  //   return this.partDao
  //     .findAll({
  //       attributes: [
  //         [
  //           Sequelize.literal('DISTINCT part_description_y'),
  //           'part_description_en',
  //         ],
  //       ],
  //       where: {
  //         part_nr: selectedRoyaltyPartNr.part_nr,
  //       },
  //     })
  //     .then(response => response.map(data => data.part_description_en));
  // }
}
