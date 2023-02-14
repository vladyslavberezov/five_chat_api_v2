import { Global, Module, Provider } from '@nestjs/common';
import { createClient } from 'redis';
import config from '../../../config';

/** provide tokens */
const provideTokens = {
  REDIS_ACTIVE_CONNECTION: 'REDIS_ACTIVE_CONNECTION',
};
delete config.redis.password;
/** redis providers */
export const REDIS_PROVIDERS: Provider[] = [
  {
    useFactory: async () => {
      const client = createClient(config.redis);
      await client.connect();
      return client;
    },
    provide: provideTokens.REDIS_ACTIVE_CONNECTION,
  },
];

export { provideTokens };

/** redis module */
@Global()
@Module({
  providers: REDIS_PROVIDERS,
  exports: REDIS_PROVIDERS,
})
export class RedisModule {}
