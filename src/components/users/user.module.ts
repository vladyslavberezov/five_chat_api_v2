import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { DatabaseModule } from '../../core/database/database.module';
import { userProviders } from './entities/user.providers';
import { UserRepository } from './entities/user.repository';
import { ContactService } from './contacts/contact.service';
import { ContactRepository } from './contacts/entities/contact.repository';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [UserService, ContactService, UserRepository, ContactRepository, ...userProviders],
  exports: [UserService],
})
export class UsersModule {}
