import { Inject, Injectable } from '@nestjs/common';
import { BaseSequelizeRepository } from '../../../../core/database/base-sequelize.repository';
import { ModelsTypes } from '../../../../core/helpers/models.enum';
import { TModelUserChats, UserChats } from './user-chats.entity';
import { User } from '../../../users/entities/user.entity';

/** user db operations repository */
@Injectable()
export class UserChatsRepository extends BaseSequelizeRepository<typeof UserChats, UserChats> {
  constructor(@Inject(ModelsTypes.CONTACTS) private readonly contactModel: typeof UserChats) {
    super(contactModel);
  }

  getUserContacts(userId: number): Promise<TModelUserChats[]> {
    return this.findAll({
      where: { userId },
      include: {
        model: User,
        as: 'contact',
        attributes: ['id', 'firstName', 'lastName', 'lastOnline', 'nickname'],
      },
    });
  }
}
