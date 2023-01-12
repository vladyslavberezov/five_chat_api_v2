import { Module } from '@nestjs/common';
import { UsersModule } from './components/users/user.module';
import { AuthModule } from './components/auth/auth.module';

@Module({
  imports: [UsersModule, AuthModule],
})
export class AppModule {}
