import { BadRequestException, ConflictException, Injectable } from '@nestjs/common';
import { BaseService } from '../../../core/base-services/base-service';
import { Contact, TModelContact } from './entities/contact.entity';
import { ContactRepository } from './entities/contact.repository';

@Injectable()
export class ContactService extends BaseService<typeof Contact, Contact> {
  constructor(private readonly contactRepository: ContactRepository) {
    super(contactRepository, 'Contact');
  }

  async addContact(userId: number, contactUserId: number): Promise<TModelContact> {
    const contact = await this.contactRepository.findOne({
      where: {
        userId,
        contactUserId,
      },
    });
    if (userId === contactUserId) {
      throw new BadRequestException(`User can't have himself in his contacts!`);
    }
    if (contact) {
      throw new ConflictException('User already in your contacts!');
    }

    return this.contactRepository.create(
      {
        userId,
        contactUserId,
      },
      {
        raw: true,
      },
    );
  }

  getUserContacts(userId) {
    return this.contactRepository.getUserContacts(userId);
  }

  async deleteUserContact(userId: number, contactUserId: number): Promise<number> {
    if (userId === contactUserId) {
      throw new BadRequestException(`User can't delete himself from his contacts!)`);
    }
    const contacts = await this.getUserContacts(userId);
    if (!contacts) {
      throw new ConflictException(`This user not in your contact!`);
    }
    return this.contactRepository.delete({ where: { contactUserId: contactUserId } });
  }
}
