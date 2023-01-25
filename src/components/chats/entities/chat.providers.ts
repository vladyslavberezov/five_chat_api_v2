import { ModelsTypes } from '../../../core/helpers/models.enum';
import { Chat } from './chat.entity';
import { UserChats } from '../user-chats/entities/user-chats.entity';
import { Message } from '../messages/entities/message.entity';

export const chatProviders = [
  {
    provide: ModelsTypes.CHATS,
    useValue: Chat,
  },
  {
    provide: ModelsTypes.USER_CHATS,
    useValue: UserChats,
  },
  {
    provide: ModelsTypes.MESSAGE,
    useValue: Message,
  },
];
