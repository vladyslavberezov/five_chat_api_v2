import { Inject, Injectable } from '@nestjs/common';
import { BaseSequelizeRepository } from '../../../../core/database/base-sequelize.repository';
import { ModelsTypes } from '../../../../core/helpers/models.enum';
import { UserChats } from '../../user-chats/entities/user-chats.entity';
import { Message } from './message.entity';

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

  async findOneMessage(uuid) {
    return Message.findOne({
      where: {
        uuid: uuid,
      },
    });
  }

  update(param) {
    return Message.update(
      {
        isRead: true,
      },
      {
        where: {
          uuid: param.uuid,
        },
      },
    );
  }

  saveMessage(data) {
    const { userChatId, text, uuid } = data;
    return Message.create({
      text: text,
      userChatId,
      authorId: data.authorId,
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
