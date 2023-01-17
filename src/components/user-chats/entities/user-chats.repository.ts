import { Inject, Injectable } from '@nestjs/common';
import { BaseSequelizeRepository } from '../../../core/database/base-sequelize.repository';
import { ModelsTypes } from '../../../core/helpers/models.enum';
import { UserChats } from './user-chats.entity';

/** user db operations repository */
@Injectable()
export class UserChatsRepository extends BaseSequelizeRepository<typeof UserChats> {
  constructor(@Inject(ModelsTypes.USER_CHATS) private readonly userChatsModel: typeof UserChats) {
    super(userChatsModel);
  }
}
