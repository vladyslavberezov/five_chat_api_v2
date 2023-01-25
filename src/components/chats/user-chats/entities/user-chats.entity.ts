import { ApiProperty } from '@nestjs/swagger';
import {
  AllowNull,
  BelongsTo,
  Column,
  DataType,
  Default,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { InferAttributes, InferCreationAttributes } from 'sequelize';
import { User } from '../../../users/entities/user.entity';
import { Chat } from '../../entities/chat.entity';
import { Message } from '../../messages/entities/message.entity';

export type TModelUserChats = Model<typeof UserChats>;

@Table
export class UserChats extends Model<InferAttributes<UserChats>, InferCreationAttributes<UserChats>> {
  /** userId */
  @ApiProperty({ required: true, format: 'number' })
  @ForeignKey(() => User)
  @AllowNull(false)
  @Column(DataType.INTEGER)
  userId: number;

  /** user */
  @ApiProperty({ required: true })
  @BelongsTo(() => User, { foreignKey: 'userId' })
  user: User;

  /** chatId */
  @ApiProperty({ required: true, format: 'number' })
  @ForeignKey(() => Chat)
  @AllowNull(false)
  @Column(DataType.INTEGER)
  chatId: number;

  /** chat */
  @ApiProperty({ required: true })
  @BelongsTo(() => Chat, { foreignKey: 'chatId', as: 'participants' })
  chat: Chat;

  /** isDeleted */
  @ApiProperty({ required: false })
  @Default(false)
  @Column(DataType.BOOLEAN)
  isDeleted: boolean;

  /**  */
  @ApiProperty({ required: true })
  @HasMany(() => Message, 'userChatId')
  messages: Message[];
}
