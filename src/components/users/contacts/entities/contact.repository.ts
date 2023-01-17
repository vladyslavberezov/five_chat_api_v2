import { Inject, Injectable } from '@nestjs/common';
import { BaseSequelizeRepository } from '../../../../core/database/base-sequelize.repository';
import { ModelsTypes } from '../../../../core/helpers/models.enum';
import { Contact } from './contact.entity';

/** user db operations repository */
@Injectable()
export class ContactRepository extends BaseSequelizeRepository<typeof Contact, Contact> {
  constructor(@Inject(ModelsTypes.CONTACTS) private readonly contactModel: typeof Contact) {
    super(contactModel);
  }
}
