/** redis payload interface */
export interface IRedisPayloadInterface {
  userId: string;
  socketId: string;
  activeChatId?: string;
}
