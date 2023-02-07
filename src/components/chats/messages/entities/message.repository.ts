import { Inject, Injectable } from '@nestjs/common';
import { BaseSequelizeRepository } from '../../../../core/database/base-sequelize.repository';
import { ModelsTypes } from '../../../../core/helpers/models.enum';
import { Message } from './message.entity';
import { UserChats } from '../../user-chats/entities/user-chats.entity';

/** user db operations repository */
@Injectable()
export class MessageRepository extends BaseSequelizeRepository<typeof Message, Message> {
  constructor(@Inject(ModelsTypes.MESSAGE) private readonly messageModel: typeof Message) {
    super(messageModel);
  }

  async getAll(userId: number, chatId: number): Promise<Message[]> {
    const userChat = await UserChats.findOne({
      where: {
        chatId,
        userId,
      },
      include: Message,
    });
    return userChat.messages;
  }

  saveMessage(userId, data) {
    const { userChatId, message, uuid } = data;
    return Message.create({
      text: message,
      userChatId,
      authorId: userId,
      uuid,
    });
  }
  deleteUserMessages(userChatId: number) {
    return Message.destroy({ where: { userChatId } });
  }
  deleteMessage(id) {
    return Message.destroy({ where: { id } });
  }
}
