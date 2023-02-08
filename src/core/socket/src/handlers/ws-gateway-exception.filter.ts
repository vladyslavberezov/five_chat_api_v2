import { ArgumentsHost, Catch, ValidationPipe } from '@nestjs/common';
import { BaseWsExceptionFilter, WsException } from '@nestjs/websockets';
import { flattenDeep } from 'lodash';

@Catch()
export class WsGatewayExceptionFilter extends BaseWsExceptionFilter {
  // TODO: [improve]: handle error as all exception format { statusCode, error, message }.
  //  We can't do it now, cause rpc and mongodb exception *is not* unified
  catch(exception: any, host: ArgumentsHost) {
    super.catch(exception, host);
  }
}

export class WSValidationPipe extends ValidationPipe {
  createExceptionFactory() {
    return (validationErrors = []) => {
      const errors = flattenDeep(validationErrors);
      return new WsException(errors);
    };
  }
}
