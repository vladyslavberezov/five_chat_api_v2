import { Injectable } from '@nestjs/common';
import { BaseService } from '../../../core/base-services/base-service';
import { UserChatsRepository } from './entities/user-chats.repository';
import { UserChats } from './entities/user-chats.entity';

@Injectable()
export class UserChatsService extends BaseService<typeof UserChats, UserChats> {
  constructor(private readonly userChatsRepository: UserChatsRepository) {
    super(userChatsRepository, 'UserChats');
  }

  // async addContact(userId: number, contactUserId: number): Promise<TModelContact> {
  //   const contact = await this.contactRepository.findOne({
  //     where: {
  //       userId,
  //       contactUserId,
  //     },
  //   });
  //   if (userId === contactUserId) {
  //     throw new BadRequestException(`User can't have himself in his contacts!`);
  //   }
  //   if (contact) {
  //     throw new ConflictException('User already in your contacts!');
  //   }
  //
  //   return this.contactRepository.create(
  //     {
  //       userId,
  //       contactUserId,
  //     },
  //     {
  //       raw: true,
  //     },
  //   );
  // }

  // getUserContacts(userId) {
  //   return this.contactRepository.getUserContacts(userId);
  // }

  // async deleteUserMessage(userId: number, contactUserId: number): Promise<number> {
  //   if (userId === contactUserId) {
  //     throw new BadRequestException(`User can't delete himself from his contacts!)`);
  //   }
  //   const contacts = await this.getUserContacts(userId);
  //   if (!contacts) {
  //     throw new ConflictException(`This user not in your contact!`);
  //   }
  //   return this.contactRepository.delete({ where: { contactUserId: contactUserId } });
  // }
}
