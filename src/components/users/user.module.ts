import { Module } from '@nestjs/common'
import { UserService } from './user.service'
import { UserController } from './user.controller'
import { DatabaseModule } from '../../core/database/database.module'
import { userProviders } from './entities/user.providers'
import { UserRepository } from './entities/user.repository'

@Module({
  imports: [DatabaseModule ],
  controllers: [UserController],
  providers: [UserService, UserRepository, ...userProviders],
  exports:[UserService]
})
export class UsersModule {
}
