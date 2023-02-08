import { ConflictException, Inject } from '@nestjs/common';
import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';

import { Server, Socket } from 'socket.io';
import config from '../../../config';
import { ListenerEnum } from '../../../core/helpers/listeners.enum';
import { redisKey } from '../../../core/helpers/redisKey';
import { provideTokens } from '../../../core/utils/storage/redis';
import { Message } from '../messages/entities/message.entity';

@WebSocketGateway()
export class ChatsSocketsGateway {
  @WebSocketServer()
  server: Server;

  @Inject(provideTokens.REDIS_ACTIVE_CONNECTION)
  protected readonly redisAsyncClient;
  protected readonly eventEmitter;

  @SubscribeMessage('sendMessage')
  async handleSendMessage(client: Socket, payload: Message) {
    // await this.messageService.createMessage(payload);
    this.server.emit('recMessage', payload);
  }

  afterInit(server: Server) {
    console.log('server io init');
  }

  handleDisconnect(client: Socket) {
    console.log(`Disconnected: ${client.id}`);
  }

  handleConnection(client: Socket) {
    console.log(`Connected ${client.id}`);
  }

  /**
   * getUserClientIds - return all user client ids;
   * @param {String} key;
   * @returns {Promise<string>};
   * @private
   */
  private async getUserClientIds(key: string): Promise<string[]> {
    if ((await this.redisAsyncClient.asyncClient.type(key)) === 'string')
      await this.redisAsyncClient.redisAsyncClient.del(key);

    return this.redisAsyncClient.asyncClient.smembers(key);
  }

  /**
   * onClientConnect - on client connect adds active client's id to redis;
   * @param {String} userId;
   * @param {String} clientId;
   * @returns {Promise<void>};
   * @private
   */
  private async onClientConnect(userId: string, clientId: string): Promise<void> {
    const key: string = redisKey('userId', userId);
    const clientIds: string[] = (await this.getUserClientIds(key)) || [];
    clientIds.push(clientId);

    /** remove all inactive clientIds */
    const activeClientIds = [];
    for await (const client_id of clientIds) {
      !this.server.sockets.sockets[client_id]?.connected
        ? this.redisAsyncClient.asyncClient.srem(key, client_id)
        : activeClientIds.push(client_id);
    }

    this.eventEmitter.emit(ListenerEnum.CLIENT_CONNECT, { clientIds: activeClientIds, userId });

    this.redisAsyncClient.asyncClient
      .sadd(key, clientId)
      .then(() => this.redisAsyncClient.expire(key, Number(config.redisExpireIn))) // expires in 2 day
      .catch((e) => {
        throw new ConflictException(e.message, e.statusCode);
      });
  }

  /**
   * onSocketDisconnect - on client disconnect removes active client's id;
   * @param {String} userId;
   * @param {String} clientId;
   * @returns {Promise<void>};
   * @private
   */
  private async onSocketDisconnect(userId: string, clientId: string): Promise<void> {
    const key: string = redisKey('userId', userId);
    const usersClientsIds: string[] = (await this.getUserClientIds(key)) || [];

    await this.redisAsyncClient.asyncClient.srem(key, clientId);

    if (usersClientsIds.includes(clientId)) {
      this.eventEmitter.emit(ListenerEnum.CLIENT_DISCONNECT, { clientIds: usersClientsIds, userId });
    }
  }
}
