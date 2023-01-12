import { Inject, Injectable } from '@nestjs/common';
import { BaseSequelizeRepository } from '../../../core/database/base-sequelize.repository';
import { ModelsTypes } from '../../../core/helpers/models.enum';
import { User } from './user.entity';

/** user db operations repository */
@Injectable()
export class UserRepository extends BaseSequelizeRepository<typeof User, User> {
  constructor(@Inject(ModelsTypes.USERS) private readonly userModel: typeof User) {
    super(userModel);
  }
}
