import { ConflictException, ForbiddenException, Inject, Logger, UnauthorizedException } from '@nestjs/common';
import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { RedisClientType } from 'redis';
import { Server, Socket } from 'socket.io';
import { v4 as uuidv4 } from 'uuid';
import config from '../../../config';
import { ListenerEnum } from '../../../core/helpers/listeners.enum';
import { redisKey } from '../../../core/helpers/redisKey';
import { SocketsActions } from '../../../core/helpers/sockets.actions';
import { provideTokens } from '../../../core/utils/storage/redis';
import { AuthService } from '../../auth/auth.service';
import { ChatService } from '../chat.service';
import { ChatsMessageCreateReqDto } from '../messages/dto/chat-message-create.req.dto';
import { ChatsMessageUpdateReqDto } from '../messages/dto/chat-message-update.req.dto';
import { MessageService } from '../messages/message.service';

@WebSocketGateway()
export class ChatsSocketsGateway {
  constructor(
    private readonly messageService: MessageService,
    private readonly chatService: ChatService,
    private readonly authService: AuthService,
  ) {}

  @WebSocketServer()
  server: Server;
  /** logger */
  logger = new Logger(ChatsSocketsGateway.name);

  @Inject(provideTokens.REDIS_ACTIVE_CONNECTION)
  protected readonly redisClient: RedisClientType;
  protected readonly eventEmitter;

  /**
   * chatCreateMessage - creates a message;
   * @param {ChatsMessageCreateReqDto} body;
   * @param {Socket} client - socket client;
   * @returns {Promise<void>};
   */
  @SubscribeMessage(SocketsActions.CHATS_MESSAGE_CREATE)
  async chatCreateMessage(
    @MessageBody() body: ChatsMessageCreateReqDto,
    @ConnectedSocket() client: Socket,
  ): Promise<any> {
    try {
      const user = await this.authService.checkAuth(client);
      const messageUuid = uuidv4();
      if (!user) {
        throw new UnauthorizedException('Not authorized!');
      }
      const chat = await this.chatService.validateChat(user.sub, body.chatId);
      chat.chat.userChats.map(async (userChat) => {
        //save exemplars for all members
        await this.messageService.saveMessage({
          authorId: user.sub,
          userChatId: userChat.id,
          text: body.message,
          uuid: messageUuid,
        });
        const sockets = await this.getUserClients(userChat.userId);
        this.socketSender(sockets, SocketsActions.CHATS_MESSAGE_CREATE, body.message);
      });
    } catch (e) {
      this.server.to(client.id).emit('error', e.message);
    }
  }

  /**
   * chatCreateMessage - creates a message;
   * @param body
   * @param {Socket} client - socket client;
   * @returns {Promise<void>};
   */
  @SubscribeMessage(SocketsActions.CHATS_MESSAGE_MARK_AS_READ)
  async chatMessageRead(@MessageBody() body: ChatsMessageUpdateReqDto, @ConnectedSocket() client: Socket) {
    try {
      const user = await this.authService.checkAuth(client);
      const chat = await this.chatService.validateChat(user.sub, body.chatId);
      if (!chat) {
        throw new ForbiddenException('Forbidden!');
      }
      // chat.chat.userChats.map(async (userChat) => {
      //   const data = await this.messageService.updateMessage({
      //     uuid: body.uuid,
      //     userChatId: userChat.id,
      //     isRead: true,
      //   });
      //   console.log('data', data);
      // });
      await this.messageService.updateMessage(body);
      const sockets = await this.getUserClients(user.sub);
      this.socketSender(
        sockets,
        SocketsActions.CHATS_MESSAGE_MARK_AS_READ,
        SocketsActions.CHATS_MESSAGE_MARK_AS_READ_RESPONSE,
      );
    } catch (e) {
      console.log(e.message);
    }
  }

  afterInit(server: Server) {
    console.log('server io init');
  }

  handleDisconnect(client: Socket) {
    console.log(`Disconnected: ${client.id}`);
  }

  /**
   * handleConnection - on connect;
   * @param {Socket} client - socket client;
   * @returns {Promise<void>};
   */
  async handleConnection(client: Socket): Promise<void> {
    const user = await this.authService.checkAuth(client);
    if (user) {
      const userId: string = user.sub.toString();
      await this.onClientConnect(userId, client.id);
    } else {
      console.log('disconnect');
      client.disconnect();
    }
    this.logger.log(`Client connected: ${client.id}`);
  }

  /**
   * getUserClients - get parsed user string array;
   * @returns {Promise<string[]>};
   * @param memberId
   */
  private async getUserClients(memberId: number): Promise<string[]> {
    const memberIdString = memberId.toString();
    const key = redisKey('userId', memberIdString);
    const valueType = await this.redisClient.type(key);
    let activeUser: string[];

    if (valueType === 'string') {
      const value = await this.redisClient.get(key);
      activeUser = value ? JSON.parse(value) : [];
    } else {
      activeUser = (await this.redisClient.sMembers(key)) || [];
    }

    return activeUser;
  }

  /**
   * getUserClientIds - return all user client ids;
   * @param {String} key;
   * @returns {Promise<string>};
   * @private
   */
  private async getUserClientIds(key: string): Promise<string[]> {
    console.log('get key', key, typeof key);
    if ((await this.redisClient.type(key)) === 'string') {
      await this.redisClient.del(key);
    }
    return this.redisClient.sMembers(key);
  }

  /**
   * socketSender - sends socket;
   * @returns {void};
   * @param getUserClients
   * @param notifyData
   * @param emitAddress
   */
  private socketSender(getUserClients: string[], emitAddress: string, notifyData?): void {
    for (const clientId of getUserClients) {
      this.server.to(String(clientId)).emit(emitAddress, notifyData);
    }
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
    console.log('clientids', clientIds);

    /** remove all inactive clientIds */
    const activeClientIds = [];
    for await (const client_id of clientIds) {
      !this.server.sockets.sockets[client_id]?.connected
        ? this.redisClient.sRem(key, client_id)
        : activeClientIds.push(client_id);
    }
    // this.eventEmitter.emit(ListenerEnum.CLIENT_CONNECT, { clientIds: activeClientIds, userId });

    this.redisClient
      .sAdd(key, clientId)
      .then(() => this.redisClient.expire(key, Number(config.redisExpireIn))) // expires in 2 day
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

    await this.redisClient.sRem(key, clientId);

    if (usersClientsIds.includes(clientId)) {
      this.eventEmitter.emit(ListenerEnum.CLIENT_DISCONNECT, { clientIds: usersClientsIds, userId });
    }
  }
}
