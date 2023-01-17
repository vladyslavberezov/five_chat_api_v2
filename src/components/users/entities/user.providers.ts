import { ModelsTypes } from '../../../core/helpers/models.enum';
import { User } from './user.entity';
import { Contact } from '../contacts/entities/contact.entity';

export const userProviders = [
  {
    provide: ModelsTypes.USERS,
    useValue: User,
  },
  {
    provide: ModelsTypes.CONTACTS,
    useValue: Contact,
  },
];
