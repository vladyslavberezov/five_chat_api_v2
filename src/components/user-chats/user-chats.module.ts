import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../core/database/database.module';
import { userChatsProviders } from './entities/user-chats.providers';
import { UserChatsRepository } from './entities/user-chats.repository';

@Module({
  imports: [DatabaseModule],
  controllers: [],
  providers: [UserChatsRepository, ...userChatsProviders],
  exports: [],
})
export class UserChatsModule {}
