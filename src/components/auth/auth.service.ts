import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import config from '../../config';
import * as bcrypt from 'bcrypt';
import { UserService } from '../users/user.service';
import { AuthLoginReqDto } from './dto/auth.login.req.dto';
import ms from '../../core/utils/ms/ms';

@Injectable()
export class AuthService {
  constructor(private usersService: UserService, private jwtService: JwtService) {}

  /**
   * login func - generates JWT access token
   * @param {AuthLoginReqDto} user - login data
   * @returns {} - token and expires time
   */
  async loginWithCredentials(user: AuthLoginReqDto) {
    const data = await this.usersService.findOne(user);
    if (!data) {
      new UnauthorizedException('Wrong credentials!');
    }
    const isPasswordValid = await bcrypt.compare(user.password, data['password']);
    if (!isPasswordValid) {
      return new UnauthorizedException('Wrong credentials!');
    }
    const expiresInMs = ms(config.jwtExpire);
    const payload = { nickname: user.nickname, sub: data.id };
    return {
      accessToken: this.jwtService.sign(payload),
      expiresAt: new Date(Date.now() + expiresInMs),
    };
  }

  async validateToken(nickname: string, password: string): Promise<any> {
    console.log(nickname, password);
    const user = await this.usersService.findOne({ nickname, password });

    return user ?? null;
  }
}
