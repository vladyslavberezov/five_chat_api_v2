import { ConflictException, Inject, Injectable, InternalServerErrorException } from '@nestjs/common';
import { Op } from 'sequelize';
import { BaseSequelizeRepository } from '../../../core/database/base-sequelize.repository';
import { ModelsTypes } from '../../../core/helpers/models.enum';
import { Chat, TModelChat } from './chat.entity';
import { UserChats } from '../user-chats/entities/user-chats.entity';
import { CreateChatReqDto } from '../dto/create-chat.dto';

/** chat db operations repository */
@Injectable()
export class ChatRepository extends BaseSequelizeRepository<typeof Chat, Chat> {
  constructor(@Inject(ModelsTypes.CHATS) private readonly chatModel: typeof Chat) {
    super(chatModel);
  }

  async createChat(userId: number, data: CreateChatReqDto): Promise<Chat> {
    if (data.contactUserId.length === 1) {
      const chats = await this.findAll({
        where: {
          isGroup: false,
        },
        include: [
          {
            model: UserChats,
            where: {
              [Op.or]: [
                {
                  userId: userId,
                },
                {
                  userId: data.contactUserId[0],
                },
              ],
            },
          },
        ],
      });
      const exist = chats.find((chat) => chat['userChat'].length === 2);
      if (exist) {
        throw new ConflictException('Chat already exist');
      }
    }
    const chat = await Chat.create(
      {
        title: data.title,
        isGroup: data.contactUserId.length > 1,
      },
      { raw: true },
    );
    await UserChats.bulkCreate(
      data.contactUserId.concat([userId]).map((userId) => ({
        chatId: chat.id,
        userId: userId,
      })),
    );
    return chat;
  }

  getAllChats(userId: number): Promise<TModelChat[]> {
    return this.findAll({
      include: [
        {
          model: UserChats,
          where: { userId },
        },
      ],
    });
  }

  getChat(chatId: number): Promise<Chat> {
    return Chat.findByPk(chatId, {
      include: [
        {
          model: UserChats,
        },
      ],
    });
  }

  deleteChat(chatId: number): Promise<number> {
    const deleteCount = Chat.destroy({
      where: {
        id: chatId,
      },
    });
    if (!deleteCount) {
      throw new InternalServerErrorException('Unable to delete chat');
    }
    return deleteCount;
  }

  async updateUserChat(id: number, data: any): Promise<UserChats> {
    const userChat = await UserChats.findOne({
      where: { id },
    });
    if (!userChat) {
      throw Error(`Chat not updated. id: ${data.chatId}`);
    }
    Object.assign(userChat, data);
    userChat.save();
    return userChat;
  }

  async updateChat(data: any): Promise<Chat> {
    const exist = await Chat.findOne({
      where: {
        id: data.chatId,
      },
    });
    if (!exist) {
      throw new ConflictException(`Chat not updated. id: ${data.chatId}`);
    }
    exist.title = data.title;
    return exist.save();
  }
}
