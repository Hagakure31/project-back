import { Table, Column, Model, PrimaryKey } from 'sequelize-typescript';

@Table({
  timestamps: false,
  modelName: 'puc_configuration_data',
  freezeTableName: false,
})
export class Puc_configuration_data extends Model<Puc_configuration_data> {
  @Column
  option_frameread1: string;

  @PrimaryKey
  @Column
  id: string;

  @Column
  option_maskwrite: string;

  @Column
  option_frameread2: string;

  @Column
  config_option_flag: boolean;

  @Column
  family: string;

  @Column
  option_text: string;

  @Column
  option_maskread: string;

  @Column
  config_feature: string;

  @Column
  configuration_part_nr: string;

  @Column
  part_nr: string;

  @Column
  configuration_filepath: string;

  @Column
  option_framewrite: string;

  @Column
  option_mtc_scr: string;

  @Column
  config_diagitem: string;

  @Column
  config_requestwrite: string;

  @Column
  option_plant_flag: string;

  @Column
  option_mismatch: string;

  @Column
  option_valueread: string;

  @Column
  option_valuewrite: string;

  @Column
  config_text: string;

  @Column
  option_aftersales_flag: string;

  @Column
  ecu_name: string;

  @Column
  config_requestread: string;

  @Column
  config_dataread: string;

  @Column
  config_datawrite: string;

  @Column
  config_size: string;

  @Column
  configuration_filename: string;

  @Column
  dll_validite: number;

  @Column
  dll_checksum: number;

  @Column
  dll_date_maj: Date;

  @Column
  dll_date_creation: Date;
}
