import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { InferAttributes, InferCreationAttributes } from 'sequelize';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../../users/entities/user.entity';

export type TModelUserChats = Model<typeof UserChats>;

@Table
export class UserChats extends Model<InferAttributes<UserChats>, InferCreationAttributes<UserChats>> {
  /** userId */
  @ApiProperty({ required: false, format: 'string' })
  @ForeignKey(() => User)
  @Column(DataType.STRING)
  userId: string;

  /** chatId */
  @ApiProperty({ required: false, format: 'string' })
  @Column(DataType.STRING)
  chatId: string;

  /** userId */
  @ApiProperty({ required: true })
  @BelongsTo(() => User, 'userId')
  user: User;

  // /** messages */
  // @ApiProperty({ required: true })
  // @HasMany(() => Messages, 'userChatId')
  // message: Messages

  // /** chats */
  // @ApiProperty({ required: true })
  // @BelongsTo(() => Chats, 'chatId' as 'participants')
  // chats: Chats

  // models.UserChats.belongsTo(models.User, { foreignKey: 'userId' })
  // @HasMany(() => Messages, 'userChatId')
  // @BelongsTo(() = Chats, 'chatId' as 'participants')
}
