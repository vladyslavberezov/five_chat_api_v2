import { Injectable } from '@nestjs/common';
import { BaseService } from '../../../core/base-services/base-service';
import { Message } from './entities/message.entity';
import { MessageRepository } from './entities/message.repository';

@Injectable()
export class MessageService extends BaseService<typeof Message, Message> {
  constructor(private readonly messageRepository: MessageRepository) {
    super(messageRepository, 'Message');
  }

  getAll(userId: number, chatId: string): Promise<Message[]> {
    const chatIdNum = parseInt(chatId);
    return this.messageRepository.getAll(userId, chatIdNum);
  }

  saveMessage(userId, body) {
    return this.messageRepository.saveMessage(userId, body);
  }

  deleteMessage(id) {
    return this.messageRepository.deleteMessage(id);
  }

  deleteUserMessages(userChatId: number): Promise<number> {
    return this.messageRepository.delete({ where: { userChatId } });
  }

  // async changeMessage(data) {
  //   const where = {};
  //   if (data.id) {
  //     where.id = data.id;
  //   }
  //   if (data.userChatId) {
  //     where.userChatId = data.userChatId;
  //   }
  //   if (data.uuid) {
  //     where.uuid = data.uuid;
  //   }
  //
  //   const message = await Message.findOne({ where });
  //   if (!message) {
  //     throw Error(`Message not found.`);
  //   }
  //
  //   Object.assign(message, data);
  //   await message.save();
  //   return message;
  // }
}
