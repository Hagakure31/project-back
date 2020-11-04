import { Table, Column, Model, PrimaryKey } from 'sequelize-typescript';

@Table({
  timestamps: false,
  modelName: 'referential_ecu_diagitems_options_2_software_parts',
  freezeTableName: false,
})
export class Referential_ecu_diagitems extends Model<Referential_ecu_diagitems> {
 
  @Column
  ecu_name: string;

  @Column
  config_diagitem: string;

  @Column
  option_valuewrite: string;

  @Column
  option_text: string;

  @Column
  royalty_part_nr: string;

  @Column
  royalty_mtc_scr: string;

  @Column
  comment: string;

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