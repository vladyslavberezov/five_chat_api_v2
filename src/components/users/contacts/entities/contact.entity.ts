import { ApiProperty } from '@nestjs/swagger';
import { Table, Column, Model, DataType, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { InferAttributes, InferCreationAttributes } from 'sequelize';
import { User } from '../../entities/user.entity';

export type TModelContact = Model<typeof Contact>;

@Table
export class Contact extends Model<InferAttributes<Contact>, InferCreationAttributes<Contact>> {
  /** contactUserId */
  @ApiProperty({ required: true, format: 'number' })
  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  contactUserId: number;

  /** contactUser */
  @ApiProperty({ required: true })
  @BelongsTo(() => User, { foreignKey: 'contactUserId', as: 'contact' })
  contact: User;

  /** userId */
  @ApiProperty({ required: true })
  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  userId: number;

  /** user */
  @ApiProperty({ required: true })
  @BelongsTo(() => User, { foreignKey: 'userId', as: 'user' })
  user: User;
}
