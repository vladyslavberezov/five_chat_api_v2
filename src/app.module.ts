import { Module } from '@nestjs/common';
import { AuthModule } from './components/auth/auth.module';
import { ChatModule } from './components/chats/chat.module';
import { UsersModule } from './components/users/user.module';
import { RedisModule } from './core/utils/storage/redis';

@Module({
  imports: [UsersModule, AuthModule, ChatModule, RedisModule],
})
export class AppModule {}
