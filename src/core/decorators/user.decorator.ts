import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { ICommonUserDataReq } from '../../dto/common.user.data.req';

/**
 * @User param decorator from the request;
 */
export const User = createParamDecorator(
  (key: keyof ICommonUserDataReq, ctx: ExecutionContext): ICommonUserDataReq | string | number => {
    const request = ctx.switchToHttp().getRequest();
    const user: ICommonUserDataReq = request.user;

    return key ? user && user[key] : user;
  },
);
