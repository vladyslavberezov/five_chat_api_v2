// in the feature -----------

// import { CanActivate, Injectable, Logger } from '@nestjs/common';
// import { Reflector } from '@nestjs/core';
// import { JwtService } from '@nestjs/jwt';
// // import { ICommonUserDataReq } from '../../dto/common.user.data.req';
// import { IComposeAuthDecoratorOptions } from '../types/auth-guard.options';
//
// // import config from '../../config';
//
// /** socket auth interceptor */
// @Injectable()
// export class SocketRolesAccessGuard implements CanActivate {
//   /** logger */
//   logger = new Logger(SocketRolesAccessGuard.name);
//
//   /** options */
//   options: IComposeAuthDecoratorOptions;
//   /**
//    * SocketAuthInterceptor;
//    * @param {Reflector} reflector;
//    // * @param {RolesMembersService} rolesMembersService - injected;
//    * @param {JwtService} jwtService - injected;
//    */
//   constructor(
//     private readonly reflector: Reflector,
//     private readonly jwtService: JwtService, // private readonly rolesMembersService: RolesMembersService,
//   ) {}
//
//   // async canActivate(context: ExecutionContext): Promise<boolean> {
//   //   const {
//   //     roleGuard: { operationId, object },
//   //   } = this.reflector.get<IComposeAuthDecoratorOptions>('roleGuardOptions', context.getHandler()) || { roleGuard: {} };
//   //
//   //   const socket = context.switchToWs().getClient();
//   //   const { authorization: accessToken, token: refreshToken } = socket.handshake.query;
//   //
//   //   const user: ICommonUserDataReq = await this.jwtService
//   //     .verifyAsync(accessToken, { secret: config.jwtSecret })
//   //     .then(returnData => returnData)
//   //     .catch(() =>
//   //       this.jwtService.verifyAsync(refreshToken, {
//   //         secret: config.jwtSecretRefresh,
//   //       }),
//   //     )
//   //     .then(returnData => returnData)
//   //     .catch(() => null);
//   //
//   //   if (!user) {
//   //     this.logger.error('token is invalid');
//   //     throw new BadRequestException(`token is invalid`);
//   //   }
//   //   const { tenantName, _id } = user;
//   //   // await is required here
//   //   return await this.rolesMembersService.validateUserOnPermission(tenantName, _id, operationId, object);
//   // }
// }
