import { applyDecorators, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiUnauthorizedResponse } from '@nestjs/swagger';

// import { IComposeAuthDecoratorOptions } from '../types/auth-guard.options';
// import { RolesAccessGuard } from '../guards/roles-access.guard';
// import { PasswordAccessGuard } from '../guards/password-access.guard';

/**
 * ComposeAuthDecorator decorator - composing decorators for auth: Guards, ApiBearerAuth, ApiUnauthorizedResponse
 * @param {IComposeAuthDecoratorOptions} options - optional parameter
 */
export function ComposeAuthDecorator() {
  const decorators = [ApiBearerAuth(), ApiUnauthorizedResponse({ description: 'Unauthorized' })];

  const guards: any = [AuthGuard('jwt')];

  // if (options?.roleGuard.operationId) {
  //   guards.push(RolesAccessGuard);
  //
  //   decorators.push(SetMetadata('roleGuardOptions', options));
  // }
  //
  // if (options?.checkPassword) {
  //   guards.push(PasswordAccessGuard);
  // }

  return applyDecorators(...decorators, UseGuards(...guards));
}
