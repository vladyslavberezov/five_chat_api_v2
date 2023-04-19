import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import config from '../../config';
import ms from '../../core/utils/ms/ms';
import { UserService } from '../users/user.service';
import { AuthLoginReqDto } from './dto/auth.login.req.dto';

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
    const isPasswordValid = bcrypt.compare(user.password, data['password']);
    if (!isPasswordValid) {
      return new UnauthorizedException('Wrong credentials!');
    }
    const expiresInMs = ms(config.jwtExpire);
    const payload = { nickname: user.userCred, sub: data.id };
    return {
      accessToken: this.jwtService.sign(payload),
      expiresAt: new Date(Date.now() + expiresInMs),
    };
  }

  checkAuth(client): Promise<any> {
    try {
      const { authorization: accessToken } = client.handshake.headers;
      return this.jwtService.verifyAsync(accessToken, { secret: config.jwtSecret });
    } catch (e) {
      console.log('error', e);
    }
  }
}
