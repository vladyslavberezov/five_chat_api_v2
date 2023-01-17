import { BadRequestException, ConflictException, Injectable } from '@nestjs/common';
import { BaseService } from '../../../core/base-services/base-service';
import { Contact, TModelContact } from './entities/contact.entity';
import { ContactRepository } from './entities/contact.repository';
import { User } from '../entities/user.entity';

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
    return this.contactRepository.findAll({
      where: { userId },
      include: {
        model: User,
        as: 'contact',
        attributes: ['id', 'firstName', 'lastName', 'lastOnline', 'nickname'],
      },
    });
  }
}
