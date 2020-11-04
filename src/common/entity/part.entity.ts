import { Table, Column, Model, PrimaryKey } from 'sequelize-typescript';

@Table({
  timestamps: false,
  modelName: 'parts',
  freezeTableName: false,
})
export class Part extends Model<Part> {
  @PrimaryKey
  @Column
  part_nr: string;

  @Column
  part_description_fr: string;

  @Column
  part_description_en: string;
}

// PartDao.init(
//     {
//     part_nr: {
//         type: DataTypes.STRING,
//         allowNull: true,
//     },
//     part_description_fr: {
//         type: DataTypes.STRING,
//         allowNull: true,
//     },
//     part_description_en: {
//         type: DataTypes.STRING,
//         allowNull: true
//     }
// }, {
//     sequelize: sequelizeService.getSequelize(),
//     modelName: 'parts',
//     freezeTableName: false,
//     createdAt: false,
//     updatedAt: false
// });
// PartDao.removeAttribute('id');
