import { Global, Module, Provider } from '@nestjs/common';
import config from '../../../config';
import { createClient } from '../redis';

/** provide tokens */
const provideTokens = {
  REDIS_ACTIVE_CONNECTION: 'REDIS_ACTIVE_CONNECTION',
};
delete config.redis.password;
/** redis providers */
export const REDIS_PROVIDERS: Provider[] = [
  {
    useFactory: () => createClient(config.redis),
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
