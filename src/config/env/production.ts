/** Env specific config */
module.exports = {
  http: {
    port: process.env.PORT || 8000,
  },
  apiLink: process.env.APP_LINK,
  baseUrl: process.env.BASE_URL,
  mongo_url: process.env.MONGO_URL,
  aws_bucket_name: process.env.AWS_S3_BUCKET_NAME,
  aws_dataroom_bucket_name: process.env.AWS_S3_DATAROOM_BUCKET_NAME,
  commonFilesHostname: process.env.COMMON_FILES_HOSTNAME,
  dataroomFilesHostname: process.env.DATAROM_FILES_HOSTNAME,
  aws_secret_access_key: process.env.AWS_SECRET_ACCESS_KEY,
  aws_access_key_id: process.env.AWS_ACCESS_KEY_ID,
  aws_access_region: process.env.AWS_ACCESS_REGION,
  jwtSecret: 'svrbenbrtnetahblnrnrrnhnaerhwhdrfhbwrehgahehd',
  jwtSecretRefresh: 'asfgrtwvbeeuik6265aaw65nr6jkk67646wfasdceqv',
  jwtSecretForgot: 'sbvsbfsb5665nnhdew43456w4tw34grwgsg456556g',
  jwtSecretActivate: 'acbfsbfbwfvf5224842354QR3r3/.aefeqfqefqqfqef',
  jwtSecretActivateTenant: 'acbfjmyms394842354QR3r3/.svsdvsdfqqfqef',
  jwtSecretActivateSpace: 'acbfsbfbhnmm6432adjukQR3r3/.svsdvsdfqqfqef',
  jwtSecretInviteToProject: 'acbfsbfbsvnmiy54842354QR3r3/.aefeqfqefqqfqef',
  jwtExpire: '6000m',
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
  subdomains: true,
  ssl: true,
  cleanRolePermissions: true,
  redis: {
    port: process.env.REDIS_PORT,
    host: process.env.REDIS_HOST,
    password: null,
  },
  redisExpireIn: process.env.REDIS_EXPIRE_IN || 60 * 60 * 24 * 7, // expires in a 7 days
  firebase: {
    type: 'service_account',
    project_id: 'teamplate-prod',
    private_key_id: 'acb652dcadc6fa3ddcdb2ddcf57e8d87d3aa7945',
    private_key:
      '-----BEGIN PRIVATE KEY-----\n' +
      'MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC885xEjTm18PET\n' +
      'W7cv5j826ep3HqZTNecoho29fwE0vao+xsJum36EkEPI7DppOkEUTaLSXlpXQJW7\n' +
      'iod37QneD1IjN6Ry9X/Oiv9DqGIhy0ZV59Z6xjN/1poLEJo+vZt50Q55tAtNsLYB\n' +
      'GkNsrbE2BVrSt2uI9+EgybLUX+OhDkZrALcSP7eNRyp23T2/eul1i+TzYTsEdcTE\n' +
      'J8OUKnAwAIzBfqvU7tT/wrB8NTOvya2G5YGWDq31cHVdH8HNLAHugPW1txkE1xeu\n' +
      '+Ebkn6UohZveomUBcNF4qfiB3CtYOR97CK31vtDBB8yqFQKBlAnHZ6TD5iDGIDVQ\n' +
      '2u0UWIMjAgMBAAECggEAD8DfzndX0Gt+Lfb/lubDbniiK7xKcbWUyDQvrRThrNwD\n' +
      'TaiUnVQpgDPm8uF/HTbWJjMy2Ac10QB5e2FZWg5RPEpatsT02QDO3xGHpsRrKhYg\n' +
      'jxj9MM9Fi+sAfNutgH2ecNGVO2BfcOLCyeS+qljw5Wgc4mSYeprwEiO+3SYBfHPn\n' +
      'iK3Sw3OtetvNJTKLzYL0L/QZE9EXWeY4zC2K1uG9eKoQWMvIJw3LZG1duuZ3ryz7\n' +
      'ETCxJIJnAcsyuNgbuRa9mwFh/wdBeIs0jBebrWUaustfMNbRlLEjfKvEb3XqCEE8\n' +
      'aeteMVfCAT++FxYIiu0RN0iOn4gaHb15sy9KCmjVQQKBgQDj4CJmxURGIjRi083F\n' +
      '/MbCoGsBF9jzbJYJMAxvUi/DtU6WtCKke+A0UxOORkG2ev5z5kW7bzsNTNKeneP4\n' +
      '5Fe2T85Ry82qGtuxoJjLiU3Qk4x7tUsMyrs5HYT7r63YgpR/6kiWjDEOherc1ZHh\n' +
      'hXDbJ7s3kNJik7ZDAOICfeJrNQKBgQDURaat8fmGegGJvs+zuoQYdAmaZbz6/ZAl\n' +
      'Khx/528JsjCaFolWTSjADhna+6hnk8dfMeCCEOvTb+p2+rJjRyrwdSP5ukBeDn64\n' +
      'jH3aU2lwIr4vtN3KXlAC6BxQoPhHrQJ7z1rit5yYNEjSRkNtZxJ/AWrugdkxvd1q\n' +
      'mQPqghYn9wKBgGDtITTdi6DZQ7cVqF0im9iFK36Xiixgb6EQ0vk22CJCqF7p2CJm\n' +
      'noMjIxpNP/5CaqEZvWdwdIm/t4bIWgOv/K8LWxLnwV8tdW0khlls2bByUjr8biPO\n' +
      'x7wPllUH8MY7JLcUDDQdBXDL/Y5ZOWfXvp05VSTZcOOFOO1fHsM4kGpRAoGBAJnx\n' +
      'CTgMzBEiWgszPh3xneq9/Fjkf3DmgqrxJ0n65SP6/hRBU8gqnOrrTwTojPDQ0z3O\n' +
      'RisNankkKL2wgb5N1m4cBcMNt7B+gpgECyFSbJzOFW8zk8U3MH9rJV2z31rbtXlk\n' +
      'n1zcG8yl3kngevXUUi2ZMZtWv9S7BOBRp+1h+f9xAoGARB9Z3Xew7nfhKs86gdY2\n' +
      'pYgfs3LkWhfkmwQlHbGxs5mupfUiYhZsyuQzQEUilOtWLRpNf2xo+KSnngQSh9Nn\n' +
      'U5PtfLr39OHhuyoHOs6w3lufY0IJmkqLExJQa4paW55/FBzS6+8RNYixmFd6qBlx\n' +
      'av4x9YQpxQx0UPzO0DMp/tc=\n' +
      '-----END PRIVATE KEY-----\n',
    client_email: 'firebase-adminsdk-4qtzg@teamplate-prod.iam.gserviceaccount.com',
    client_id: '116369751292547793039',
    auth_uri: 'https://accounts.google.com/o/oauth2/auth',
    token_uri: 'https://oauth2.googleapis.com/token',
    auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
    client_x509_cert_url:
      'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-4qtzg%40teamplate-prod.iam.gserviceaccount.com',
  },
  bull: {
    sendMail: {
      attempts: 3,
      backoff: 5000,
      concurrency: 5,
    },
  },
  jaas: {
    privateKey:
      '-----BEGIN PRIVATE KEY-----\n' +
      'MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCAFnr+AeVm1LGh\n' +
      'qbZnp8i18B7x5WnFMYwq4kR41wusPh35m6Kt+a5IEOsrluaNgqrRZsY97NwqUzP6\n' +
      '27DePFg3XOa2sE92KqxvjvSO+oXjeayUy+gOLHSkOdTHm/p2otxTK+ENUK5EvZH3\n' +
      'QN93/HZVuOxJywVZ775J9GfYbqBHTziGAhzTg78AEI4epFLDJfAOZvfYhvbV/vc0\n' +
      'yRXJCDiP4/aoAwdSB49VVVAFJjo0HQy7H6MEMeJHeEs3RleS9WSgm9XpHDhHMK6L\n' +
      'ad1In10HpMl97MvBqHmY0po11arhRWrIZrPAtljidHjwqO9xd4gSvK/OT1HPrMZ/\n' +
      'phnLbRCjAgMBAAECggEAPXqMzh5a3WB5Yf7zbg06aRk3wSM8AUom3O59rwKIt8OY\n' +
      '35W0H40X+b8lIWbsgj+Vfay2ukJV6nrFGEMaQZD1Rp1wn39ApJcW7PTQrU/Rs71S\n' +
      '+JhmaWctFSYs2yIitY618bW974YqHxReWy7oE885fSulPkYT63cG/rgwn9F5XMAU\n' +
      '91AXhSMNK00zPSHxiNcPLinG6xkd7o5EnXcX2cj5FiBz8ipapzEvdDWOVa3EiEZw\n' +
      'p7WRAf6IgQ+23KsYHJCJRf0aoAh/IRt3qMUV1NMQnD1CFkitgdGa8x5wq/lVQLIs\n' +
      'qyvjVnWx7b57+a+Jl8eWvZw4MCcv8wEOGpMijCNlAQKBgQDu210W1YVufUpw5GTT\n' +
      'HzHv+tKa4XAkelIyttvMFyuJz9OI493C8bofkXhatp7VkLQ9PL7FePznFHmFgFwp\n' +
      'FIwxMQvWPNOn+02jrGcEWyblfZCjUSVKjmkZRRBVoQKYvJoXbImPHuEN81ceZS5e\n' +
      'WOuDDmJq60BupHzrD6zhaBe2BwKBgQCJR+bKcSV9cqxYAAAYbGmEl2m970aqtfGf\n' +
      '78S/h+0yRfnzNr9V8UOd0RqoplMYJ1tTakZccMb+2TYMczARQ3vnd9ghz+/DyGpD\n' +
      'WXA8+zNo1LVeAftMgioMK7T0i6DMZbcyTmHXyXmN1frl7+j2FQWFXYZdRDPeAear\n' +
      'CJLlUVDJhQKBgGC3kI0TbpEbyI3H3Y+jXQwoSykNyePrZ+dDJeMRKr8F2Ujfw8cR\n' +
      'LGVl+Q76TXx6uJDnTPQXFojXQJGvNSIpQM8WZg2c2bN2TazNvXUFF83rNyr6S5hR\n' +
      '6/qgfYm+xZdlHxwHBfhe75A/jXIwVEM9zDdoFq/mjFOA5VglI8Kt7JP3AoGAWRm5\n' +
      'yZs2Yf2TrmoRpch3k/9SOlya2SHN+ah9YnKumPqiCCF4fidhY4TccKnDNOIWfEV1\n' +
      '9XmdLrt8QQhiIlJSkSFPvmJflAr4LU5Xcrz32Qp1zNYsbLPu5odXo4EclI1QIe6N\n' +
      'wqiZpF1Fwwe7hDyQoMba9p3VrDo/pLKj5QKqFKECgYEAtZkL4O6wYEE1bHHwG57L\n' +
      'V6u9GzA3OcznLyx8trCX7X/wAvoA3K3QMxpUiMxenLZ9UlhaW8Np8e3TMqBzO9o0\n' +
      'MYybAJP9qyGzy5M8H7wEXqiz+W6E5MHDOF3n+Iyia3Jva140Sec2GdSzVZ9Pm/sj\n' +
      'p90WWUFELAOBlpIah4XkHmw=\n' +
      '-----END PRIVATE KEY-----',
    appId: 'vpaas-magic-cookie-63952a90c17e476399c3bef350cd8d3b',
    kid: 'vpaas-magic-cookie-63952a90c17e476399c3bef350cd8d3b/276af1',
    jwtExpire: '6000m',
    jwtAlg: 'RS256',
    authorization: 'f79JQXaHvWtnXYN5VXCM4rehqFO6j5Ch1M3Kd4H2AymWFdIarP',
    redisExpireIn: 60 * 60 * 24 * 2, // expires in a 2 days
  },
};
