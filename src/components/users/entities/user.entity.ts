import {
  Table,
  Column,
  Model,
  Unique,
  CreatedAt,
  UpdatedAt,
  DataType,
  AllowNull,
  HasMany,
  BelongsToMany,
} from 'sequelize-typescript';
import { InferAttributes, InferCreationAttributes } from 'sequelize';
import { IsDate, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Contact } from '../contacts/entities/contact.entity';
import { UserChats } from '../../user-chats/entities/user-chats.entity';

export type TModelUser = Model<typeof User>;

@Table
export class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  /** firstName */
  @ApiProperty({ required: false, format: 'string' })
  @IsOptional()
  @IsString()
  @Column(DataType.STRING)
  firstName?: string;

  /** lastName */
  @ApiProperty({ required: false, format: 'string' })
  @IsOptional()
  @IsString()
  @Column(DataType.STRING)
  lastName?: string;

  /** nickname */
  @ApiProperty({ required: true, format: 'string' })
  @IsString()
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  nickname: string;

  /** email */
  @ApiProperty({ required: false, format: 'string' })
  @IsOptional()
  @Unique
  @IsString()
  @Column({
    type: DataType.STRING,
  })
  email?: string;

  /** password */
  @ApiProperty({ required: false, format: 'string' })
  @IsOptional()
  @IsString()
  @AllowNull
  @Column(DataType.STRING)
  password: string;

  @Column
  lastOnline: Date;

  /** createdAt */
  @ApiProperty({ required: false, format: 'date' })
  @IsOptional()
  @IsDate()
  @CreatedAt
  createdAt?: Date;

  /** updatedAt */
  @ApiProperty({ required: false, format: 'date' })
  @IsOptional()
  @IsDate()
  @UpdatedAt
  updatedAt?: Date;

  /**  */
  @ApiProperty({ required: true })
  @BelongsToMany(() => User, {
    through: () => Contact,
    as: 'contacts',
    foreignKey: 'userId',
  })
  contacts: User[];

  /**  */
  @ApiProperty({ required: true })
  @HasMany(() => UserChats, 'userId')
  userChat: UserChats;
}
