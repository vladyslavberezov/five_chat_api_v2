/** Env specific config */
import * as process from 'process'

module.exports = {
  dbPort: process.env.DB_PORT,
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
  jwtSecret: 'secretKey',
  jwtSecretRefresh: 'asfgrtjykjtuik6265aaw65nr6jkk67646wfasdceqv',
  jwtSecretForgot: 'sbvsbfsb56651vewvew43456w4tw34grwgsg456556g',
  jwtSecretActivate: 'acbfsbfbsvb694842354QR3r3/.aefeqfqefqqfqef',
  jwtSecretActivateTenant: 'acbfsbfbsvb694842354QR3r3/.svsdvsdfqqfqef',
  jwtSecretActivateSpace: 'acbfsbfbsvb69asdadjukQR3r3/.svsdvsdfqqfqef',
  jwtSecretInviteToProject: 'acbfsbfbsvb694842354QR3r3/.aefeqfqefqqfqef',
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
  mail: {
    emailApiKey: process.env.EMAIL_API_KEY,
    emailSecretKey: process.env.EMAIL_SECRET_KEY,
    fromEmail: process.env.EMAIL_FROM,
    fromUser: process.env.EMAIL_FROM_NAME,
    mailSendMethod: 'send',
    mailVersion: 'v3.1',
  },
};
