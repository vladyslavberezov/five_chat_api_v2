import { ConflictException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { Op } from 'sequelize';
import { BaseService } from '../../core/base-services/base-service';
import { AuthLoginReqDto } from '../auth/dto/auth.login.req.dto';
import { CreateUserReqDto } from './dto/create-user.dto';
import { TModelUser, User } from './entities/user.entity';
import { UserRepository } from './entities/user.repository';

@Injectable()
export class UserService extends BaseService<typeof User, User> {
  constructor(private readonly userRepository: UserRepository) {
    super(userRepository, 'User');
  }

  async createUser(data: CreateUserReqDto): Promise<TModelUser> {
    const { ...rest } = data;

    const user = await this.userRepository.findOne({
      where: { nickname: rest.nickname },
    });

    if (user) {
      throw new ConflictException('User already exists');
    }

    // Create hash from the password
    const salt = await bcrypt.genSalt(10);
    const password: string = await bcrypt.hash(data.password, salt);

    return this.create({
      ...rest,
      password,
    });
  }

  findOne(user: AuthLoginReqDto) {
    return this.userRepository.findOne({
      where: {
        [Op.or]: [
          {
            nickname: user.userCred,
          },
          {
            email: user.userCred,
          },
        ],
      },
      attributes: {
        include: ['password'],
      },
      raw: true,
    });
  }
}
