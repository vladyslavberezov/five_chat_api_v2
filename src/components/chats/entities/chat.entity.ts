import {
  AllowNull,
  BelongsToMany,
  Column,
  CreatedAt,
  DataType,
  HasMany,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import { InferAttributes, InferCreationAttributes } from 'sequelize';
import { IsDate, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { UserChats } from '../user-chats/entities/user-chats.entity';
import { User } from '../../users/entities/user.entity';

export type TModelChat = Model<typeof Chat>;

@Table
export class Chat extends Model<InferAttributes<Chat>, InferCreationAttributes<Chat>> {
  /** title */
  @ApiProperty({ required: false, format: 'string' })
  @AllowNull
  @IsString()
  @Column(DataType.STRING)
  title: string;

  /** isGroup */
  @ApiProperty({ required: true, format: 'boolean' })
  @IsString()
  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  isGroup: boolean;

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
    through: () => UserChats,
    as: 'chat',
    foreignKey: 'chatId',
  })
  user: User[];

  /**  */
  @ApiProperty({ required: true })
  @HasMany(() => UserChats, 'chatId')
  userChat: UserChats[];
}
