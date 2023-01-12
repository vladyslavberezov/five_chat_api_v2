/** Static config */
export const staticConfig = {
  swagger: {
    location: 'api',
    title: 'Chat API',
    description: 'Chat API server',
    version: '2.0',
  },
  token: {
    secret: 'secretKeyForAccessToken',
    // accessExpired: 3000,
    accessExpired: 86400000, // 1000 * 60 *  60 * 24,
    refreshExpired: '30d',
    forgotExpired: '30d',
    refreshLength: 256,
    refreshRegenWithAccess: false,
    types: ['refresh', 'forgot'],
  },
  corsEnabled: true,
  mongo_options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  defaultUser: {
    tenantName: process.env.USER_TENANT_NAME || 'string',
    userName: process.env.USER_NAME || 'string',
    email: process.env.USER_EMAIL || 'string@string.com',
    password: process.env.USER_PASSWORD || 'string',
  },
  ticketNameMaxWords: 10,
  doneExpired: 604800000, // 1000 * 60 * 60 * 24 * 7, 1 week
  requestLimit: 52428800, // 50MB
  dataroomFileSizeLimit: 1073741824, // 1GB
  messagesFileSizeLimit: 1073741824, // 1GB
  ticketsFileSizeLimit: 1073741824, // 1GB
  contentsFileSizeLimit: 52428800, // 50MB
  notificationsLimit: 100,
  dataroomFileExpires: 60 * 30, // 30min
  videoCallExternalUrlKeyLength: 8,
};
