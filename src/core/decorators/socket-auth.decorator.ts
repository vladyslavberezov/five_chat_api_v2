import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';
// import { SocketRolesAccessGuard } from '../guards/socket-roles-access.guard';
import { IComposeAuthDecoratorOptions } from '../types/auth-guard.options';

/**
 * SocketsAuthDecorator;
 * @param {IComposeAuthDecoratorOptions} options;
 */
export const SocketsAuthDecorator = (options?: IComposeAuthDecoratorOptions) => {
  const decorators = [SetMetadata('roleGuardOptions', options)];
  return applyDecorators(...decorators, UseGuards());
};
