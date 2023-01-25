import { Module } from '@nestjs/common';
import { UsersModule } from './components/users/user.module';
import { AuthModule } from './components/auth/auth.module';
import { ChatModule } from './components/chats/chat.module';

@Module({
  imports: [UsersModule, AuthModule, ChatModule],
})
export class AppModule {}
