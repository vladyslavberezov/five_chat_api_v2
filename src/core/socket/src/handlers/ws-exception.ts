import { WsException } from '@nestjs/websockets';
/** web sockets exception */
export class WsAuthError extends WsException {
  constructor(error?: string | Record<string, unknown>) {
    super(error || 'Socket authorization failed.');
  }
}
