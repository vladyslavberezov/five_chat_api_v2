import { Logger, NestApplicationOptions, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import * as bodyParser from 'body-parser';
import { useContainer } from 'class-validator';
import * as compression from 'compression';
import 'dotenv/config';
import helmet from 'helmet';
import * as pinoLogger from 'nestjs-pino';
import { AppModule } from './app.module';
import config from './config';
import { IS_NODE_DEVELOPMENT } from './core/helpers/enviroment';
import { RedisIoAdapter } from './core/socket/src/adapters/redis-io.adapter';
import { buildDocs } from './docs';

// const Sentry = require('@sentry/node');
// const Tracing = require('@sentry/tracing');

async function bootstrap() {
  const { Logger: PinoDefaultLogger } = pinoLogger;

  const nestConfig: NestApplicationOptions = { cors: config.corsEnabled };

  if (!IS_NODE_DEVELOPMENT) {
    nestConfig.logger = false;
  }

  /** app instance */
  const app = await NestFactory.create(AppModule, nestConfig);
  app.connectMicroservice<MicroserviceOptions>(
    {
      transport: Transport.TCP,
      options: {
        port: 3003,
      },
    },
    { inheritAppConfig: true },
  );
  await app.startAllMicroservices();
  // if (IS_NODE_PRODUCTION) {
  //   Sentry.init({
  //     dsn: 'https://72e0a633b8b048ccb8e0aa5c67a1fc1e@o548694.ingest.sentry.io/4503930282835968',
  //     integrations: [
  //       // enable HTTP calls tracing
  //       new Sentry.Integrations.Http({ tracing: true }),
  //       // enable Express.js middleware tracing
  //       new Tracing.Integrations.Express({
  //         // to trace all requests to the default router
  //         app,
  //         // alternatively, you can specify the routes you want to trace:
  //         // router: someRouter,
  //       }),
  //     ],
  //     // We recommend adjusting this value in production, or using tracesSampler
  //     // for finer control
  //     tracesSampleRate: 1.0,
  //   });
  //
  //   app.use(Sentry.Handlers.requestHandler());
  //   // TracingHandler creates a trace for every incoming request
  //   app.use(Sentry.Handlers.tracingHandler());
  //   // the rest of your app
  //
  //   app.use(Sentry.Handlers.errorHandler());
  // }
  if (!IS_NODE_DEVELOPMENT) {
    app.useLogger(app.get(PinoDefaultLogger));
  }
  app.setGlobalPrefix('api/v2');

  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  /** validate all request dtos */
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  /** security tweaks */
  if (!IS_NODE_DEVELOPMENT) {
    app.use(helmet());
  }
  //TODO: just for test
  // if (false && IS_NODE_PRODUCTION) {
  //   /** limit rate */
  //   app.use(
  //     rateLimit({
  //       windowMs: 15 * 60 * 1000, // 15 minutes
  //       max: 100, // limit each IP to 100 requests per windowMs
  //     }),
  //   )
  // }

  /** compress responses */
  app.use(compression());

  app.use(bodyParser.text({ limit: config.requestLimit }));
  app.use(bodyParser.raw({ limit: config.requestLimit }));
  app.use(bodyParser.json({ limit: config.requestLimit }));
  app.use(bodyParser.urlencoded({ limit: config.requestLimit, extended: true }));
  app.enableCors({
    origin: '*',
  });
  /** swagger config */
  if (IS_NODE_DEVELOPMENT) {
    buildDocs(app);
  }

  const redisIoAdapter = new RedisIoAdapter(app);
  await redisIoAdapter.connectToRedis();
  app.useWebSocketAdapter(redisIoAdapter);

  /** listen to 0.0.0.0 will make server config easier */
  await app.listen(config.http.port, '0.0.0.0');

  if (IS_NODE_DEVELOPMENT) {
    /** logger instance */
    const logger = new Logger('bootstrap');

    logger.log(`app is listening on port ${config.http.port}`);
  }
}

bootstrap();
