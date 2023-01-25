import { Inject, Injectable } from '@nestjs/common';
import { BaseSequelizeRepository } from '../../../../core/database/base-sequelize.repository';
import { ModelsTypes } from '../../../../core/helpers/models.enum';
import { Message } from './message.entity';

/** user db operations repository */
@Injectable()
export class MessageRepository extends BaseSequelizeRepository<typeof Message, Message> {
  constructor(@Inject(ModelsTypes.MESSAGE) private readonly messageModel: typeof Message) {
    super(messageModel);
  }

  // getUserMessages(userId: number): Promise<TModelMessage[]> {
  //   return this.findAll({
  //     where: { userId },
  //     include: {
  //       model: User,
  //       as: 'contact',
  //       attributes: ['id', 'firstName', 'lastName', 'lastOnline', 'nickname'],
  //     },
  //   });
  // }
}
