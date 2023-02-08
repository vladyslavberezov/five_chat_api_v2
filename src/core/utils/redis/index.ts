// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { decorate } from 'async-redis';
import { createClient as redisClient } from 'redis';
import { RedisOptions } from '../../../interfaces/redis-options.interface';

/**
 * createClient - create redis client;
 * @param {RedisOptions} connectOptions;
 * @returns {};
 */
const createClient = (connectOptions: RedisOptions) => {
  const client: any = redisClient(connectOptions);

  client.asyncClient = decorate(client);

  return client;
};

export { createClient };
