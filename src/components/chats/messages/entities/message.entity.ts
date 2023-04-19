import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsOptional } from 'class-validator';
import { InferAttributes, InferCreationAttributes } from 'sequelize';
import {
  AllowNull,
  BelongsTo,
  Column,
  CreatedAt,
  DataType,
  ForeignKey,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import { UserChats } from '../../user-chats/entities/user-chats.entity';

// export type TModelMessage = Model<typeof Message>;

@Table
export class Message extends Model<InferAttributes<Message>, InferCreationAttributes<Message>> {
  /** userChatId */
  @ApiProperty({ required: true, format: 'number' })
  @ForeignKey(() => UserChats)
  @Column(DataType.INTEGER)
  userChatId: number;

  /** userChat */
  @ApiProperty({ required: true })
  @BelongsTo(() => UserChats, { foreignKey: 'userChatId' })
  userChats: UserChats;

  /** authorId */
  @ApiProperty({ required: true })
  @AllowNull(false)
  @Column(DataType.INTEGER)
  authorId: number;

  /** text */
  @ApiProperty({ required: false })
  @Column(DataType.STRING)
  text: string;

  /** isRead */
  @ApiProperty({ required: true })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  // @Default(false)
  isRead: boolean;

  /** uuid */
  @ApiProperty({ required: false })
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUID,
  })
  uuid: string;

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
}
