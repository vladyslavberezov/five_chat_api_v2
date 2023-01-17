import { ConflictException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserRepository } from './entities/user.repository';
import { TModelUser, User } from './entities/user.entity';
import { BaseService } from '../../core/base-services/base-service';
import { CreateUserReqDto } from './dto/create-user.dto';
import { AuthLoginReqDto } from '../auth/dto/auth.login.req.dto';

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
        nickname: user.nickname,
      },
      attributes: {
        include: ['password'],
      },
      raw: true,
    });
  }
}
