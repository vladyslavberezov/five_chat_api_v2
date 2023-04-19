/** Env specific config */
import * as process from 'process';

module.exports = {
  dbPort: process.env.DB_PORT,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  host: process.env.HOST,
  dbDialect: process.env.DIALECT,
  dbUserEntry: process.env.DB_USER_ENTRY,
  dbPassword: process.env.DB_PASSWORD,
  http: {
    port: process.env.PORT || 3001,
  },
  apiLink: process.env.APP_LINK,
  baseUrl: process.env.BASE_URL,
  jwtSecret: process.env.ACCESS_TOKEN_SECRET,
  jwtSecretRefresh: 'asfgrtjykjtuik6265aaw65nr6jkk67646wfasdceqv',
  jwtSecretForgot: 'sbvsbfsb56651vewvew43456w4tw34grwgsg456556g',
  jwtExpire: '20d',
  jwtExpireRefresh: '30d',
  jwtExpireForgot: '30d',
  jwtExpireActivate: '365d',
  jwtExpireActivateTenant: '365d',
  jwtExpireActivateSpace: '365d',
  expireTime: {
    value: 365,
    period: 'd',
  },
  jwtExpireInviteToProject: '365d',
  redis: {
    url: 'redis://localhost:6379',
    // port: 6379,
    // host: 'localhost',
    // password: null,
  },
  subdomains: false,
  ssl: false,
  cleanRolePermissions: true,
  redisExpireIn: process.env.REDIS_EXPIRE_IN || 60 * 60 * 48, // expires in 2 day
};
