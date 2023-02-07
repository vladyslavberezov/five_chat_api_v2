import { ConflictException, ForbiddenException, Injectable } from '@nestjs/common';
import { ChatRepository } from './entities/chat.repository';
import { Chat, TModelChat } from './entities/chat.entity';
import { BaseService } from '../../core/base-services/base-service';
import { CreateChatReqDto } from './dto/create-chat.dto';
import { ContactService } from '../users/contacts/contact.service';
import { UserChats } from './user-chats/entities/user-chats.entity';
import { MessageService } from './messages/message.service';

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
    const chat = await this.getChat(chatId);
    const userChat = chat.userChats.find((userChats) => userChats.userId === userId);
    if (!userChat) {
      throw new ForbiddenException('You must be a chat participant');
    }
    if (forAll === 'true') {
      return this.chatRepository.deleteChat(chat.id);
    } else {
      await this.messageService.deleteUserMessages(userChat.id);
      return this.chatRepository.updateUserChat(userChat.id, { isDeleted: true });
    }
  }

  async updateChat(id: string, title: string): Promise<Chat> {
    const idNumber = parseInt(id);
    return this.chatRepository.updateChat(idNumber, title);
  }
}
