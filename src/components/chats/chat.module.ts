import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatController } from './chat.controller';
import { DatabaseModule } from '../../core/database/database.module';
import { chatProviders } from './entities/chat.providers';
import { ChatRepository } from './entities/chat.repository';
import { UserChatsService } from './user-chats/user-chats.service';
import { UserChatsRepository } from './user-chats/entities/user-chats.repository';
import { MessageService } from './messages/message.service';
import { MessageRepository } from './messages/entities/message.repository';
import { UsersModule } from '../users/user.module';

@Module({
  imports: [DatabaseModule, UsersModule],
  controllers: [ChatController],
  providers: [
    ChatService,
    UserChatsService,
    MessageService,
    ChatRepository,
    UserChatsRepository,
    MessageRepository,
    ...chatProviders,
  ],
  exports: [ChatService],
})
export class ChatModule {}
