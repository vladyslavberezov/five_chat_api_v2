import { Module } from '@nestjs/common';
import { UsersModule } from './components/users/user.module';
import { AuthModule } from './components/auth/auth.module';
import { UserChatsModule } from './components/user-chats/user-chats.module';

@Module({
  imports: [UsersModule, AuthModule, UserChatsModule],
})
export class AppModule {}
