import { UserChats } from './user-chats.entity';
import { ModelsTypes } from '../../../core/helpers/models.enum';

export const userChatsProviders = [
  {
    provide: ModelsTypes.USER_CHATS,
    useValue: UserChats,
  },
];
