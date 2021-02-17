import {
  Table,
  Column,
  Model,
  PrimaryKey,
  Unique,
  BeforeCreate,
} from 'sequelize-typescript';

@Table({
  timestamps: false,
  modelName: 'users',
  freezeTableName: false,
})
export class User extends Model<User> {
  @PrimaryKey
  @Unique
  @Column
  email: string;

  @Column
  username: string;

  @Column
  password: string;

  // @BeforeCreate
  // emailToLowerCase() {
  //     this.email = this.email.toLowerCase();
  // }
}
