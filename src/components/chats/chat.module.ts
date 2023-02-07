import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../core/database/database.module';
import { UsersModule } from '../users/user.module';
import { ChatController } from './chat.controller';
import { ChatService } from './chat.service';
import { chatProviders } from './entities/chat.providers';
import { ChatRepository } from './entities/chat.repository';
import { MessageRepository } from './messages/entities/message.repository';
import { MessageService } from './messages/message.service';
// import { ChatsSocketsGateway } from './socket/chats.sockets.gateway';
import { UserChatsRepository } from './user-chats/entities/user-chats.repository';
// import { ChatsSocketsGateway } from './socket/chats.sockets.gateway';
import { UserChatsService } from './user-chats/user-chats.service';

@Module({
  imports: [DatabaseModule, UsersModule],
  controllers: [ChatController],
  providers: [
    ChatService,
    UserChatsService,
    // ChatsSocketsGateway,
    MessageService,
    ChatRepository,
    UserChatsRepository,
    MessageRepository,
    ...chatProviders,
  ],
  exports: [ChatService],
})
export class ChatModule {}
