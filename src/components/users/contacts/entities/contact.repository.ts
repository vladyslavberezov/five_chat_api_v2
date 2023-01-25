import { Inject, Injectable } from '@nestjs/common';
import { BaseSequelizeRepository } from '../../../../core/database/base-sequelize.repository';
import { ModelsTypes } from '../../../../core/helpers/models.enum';
import { Contact, TModelContact } from './contact.entity';
import { User } from '../../entities/user.entity';

/** user db operations repository */
@Injectable()
export class ContactRepository extends BaseSequelizeRepository<typeof Contact, Contact> {
  constructor(@Inject(ModelsTypes.CONTACTS) private readonly contactModel: typeof Contact) {
    super(contactModel);
  }

  getUserContacts(userId: number): Promise<TModelContact[]> {
    return this.findAll({
      where: { userId },
      include: {
        model: User,
        as: 'contact',
        attributes: ['id', 'firstName', 'lastName', 'lastOnline', 'nickname'],
      },
      raw: true,
    });
  }

  getUserContact(userId: number, contactUserId): Promise<TModelContact> {
    return this.findOne({
      where: {
        userId,
        contactUserId,
      },
    });
  }
}
