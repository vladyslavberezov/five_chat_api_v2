import { ConflictException, ForbiddenException, Injectable } from '@nestjs/common';
import { BaseService } from '../../core/base-services/base-service';
import { ContactService } from '../users/contacts/contact.service';
import { CreateChatReqDto } from './dto/create-chat.dto';
import { Chat, TModelChat } from './entities/chat.entity';
import { ChatRepository } from './entities/chat.repository';
import { MessageService } from './messages/message.service';
import { UserChats } from './user-chats/entities/user-chats.entity';

@Injectable()
export class ChatService extends BaseService<typeof Chat, Chat> {
  constructor(
    private readonly chatRepository: ChatRepository,
    private readonly contactService: ContactService,
    private readonly messageService: MessageService,
  ) {
    super(chatRepository, 'Chat');
  }

  async createChat(userId: number, data: CreateChatReqDto): Promise<Chat> {
    const contacts = await this.contactService.getUserContacts(userId);
    if (!contacts) {
      throw new ConflictException('Contacts not found');
    }
    const contactIds = contacts.map((e) => {
      return Object.assign(e).contactUserId;
    });
    for (let i = 0; i < data.contactUserId.length; i += 1) {
      const userId = data.contactUserId[i];
      if (!contactIds.some((contactId) => contactId === userId)) {
        throw new ConflictException('User must be in your contacts');
      }
    }
    const chat = await this.chatRepository.createChat(userId, data);
    if (!chat?.id) {
      throw new ConflictException('Unable to create chat');
    }
    return chat;
  }

  getAllUserChats(userId: number): Promise<TModelChat[]> {
    return this.chatRepository.getAllChats(userId);
  }

  getChat(chatId: number): Promise<Chat> {
    return this.chatRepository.getChat(chatId);
  }

  async deleteChat(userId: number, chatId, query): Promise<number | UserChats> {
    const { forAll } = query;
    const validate = await this.validateChat(userId, chatId);
    if (forAll === 'true') {
      return this.chatRepository.deleteChat(validate.chat.id);
    } else {
      await this.messageService.deleteUserMessages(validate.userChat.id);
      return this.chatRepository.updateUserChat(validate.userChat.id, { isDeleted: true });
    }
  }

  async updateChat(id: string, title: string): Promise<Chat> {
    const idNumber = parseInt(id);
    return this.chatRepository.updateChat(idNumber, title);
  }

  async validateChat(userId: number, chatId: number) {
    const chat = await this.getChat(chatId);
    if (!chat) {
      throw new ConflictException('Chat not found');
    }
    const userChat = chat.userChats.find((userChats) => userChats.userId === userId);
    if (!userChat) {
      throw new ForbiddenException('You must be a chat participant');
    }
    return { chat, userChat };
  }
}
