import { User } from './user.entity'
import { ModelsTypes } from '../../../core/helpers/models.enum'

export const userProviders = [
  {
    provide: ModelsTypes.USERS,
    useValue: User,
  },
]