import { Injectable } from '@nestjs/common';
import { BaseService } from '../../../core/base-services/base-service';
import { Message } from './entities/message.entity';
import { MessageRepository } from './entities/message.repository';

@Injectable()
export class MessageService extends BaseService<typeof Message, Message> {
  constructor(private readonly messageRepository: MessageRepository) {
    super(messageRepository, 'Message');
  }

  // async addMessage(userId: number, contactUserId: number): Promise<TModelMessage> {
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
  //
  // getUserMessages(userId) {
  //   return this.contactRepository.getUserContacts(userId);
  // }
  //
  // async deleteUserContact(userId: number, contactUserId: number): Promise<number> {
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
