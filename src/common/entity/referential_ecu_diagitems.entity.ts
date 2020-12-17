import { ParseUUIDPipe } from '@nestjs/common';
import {
  Table,
  Column,
  Model,
  PrimaryKey,
  ForeignKey,
  BelongsTo,
  BelongsToMany,
} from 'sequelize-typescript';
import { Part } from './part.entity';
import { Puc_configuration_data } from './puc_configuration_data.entity';

@Table({
  timestamps: false,
  modelName: 'referential_ecu_diagitems_options_2_software_parts',
  freezeTableName: false,
})
export class Referential_ecu_diagitems extends Model<
  Referential_ecu_diagitems
> {
  @PrimaryKey
  @Column
  id: string;

  @ForeignKey(() => Puc_configuration_data)
  @Column
  puc_id: string;

  @Column
  ecu_name: string;

  @Column
  config_diagitem: string;

  @Column
  option_valuewrite: string;

  @ForeignKey(() => Part)
  @Column
  royalty_part_nr: string;

  @Column
  royalty_mtc_scr: string;

  @Column
  comment: string;

  @BelongsTo(() => Part)
  part: Part;

  @BelongsTo(() => Puc_configuration_data)
  puc: Puc_configuration_data;
}

// class Referential_ecu_diagitems extends Model {}
// Referential_ecu_diagitems.init({
//     ecu_name: {
//         type: DataTypes.STRING,
//         allowNull: true,
//     },
//     config_diagitem: {
//         type: DataTypes.STRING,
//         allowNull: true,

//     },
//     option_valuewrite: {
//         type: DataTypes.STRING,
//         allowNull: true

//     },
//     option_text: {
//         type: DataTypes.STRING,
//         allowNull: true,
//     },
//     royalty_part_nr: {
//         type: DataTypes.STRING,
//         allowNull: true,

//     },
//     royalty_mtc_scr: {
//         type: DataTypes.STRING,
//         allowNull: true

//     },
//     comment: {
//         type: DataTypes.STRING,
//         allowNull: true

//     }

// }, {
//     sequelize,
//     modelName: 'referential_ecu_diagitems_options_2_software_parts',
//     freezeTableName: false,
//     createdAt: false,
//     updatedAt: false
// });
// Referential_ecu_diagitems.removeAttribute('id');
