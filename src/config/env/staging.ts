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
  aws_secret_access_key: process.env.AWS_SECRET_ACCESS_KEY,
  aws_access_key_id: process.env.AWS_ACCESS_KEY_ID,
  aws_access_region: process.env.AWS_ACCESS_REGION,
  jwtSecret: 'svrbenbrtnetahbfdbwreernhnaerhwhdrfhbwrehgahehd',
  jwtSecretRefresh: 'asfgrtjykjtuik6265aaw65nr6jkk67646wfasdceqv',
  jwtSecretForgot: 'sbvsbfsb56651vewvew43456w4tw34grwgsg456556g',
  jwtSecretActivate: 'acbfsbfbsvb694842354QR3r3/.aefeqfqefqqfqef',
  jwtSecretActivateTenant: 'acbfsbfbsvb694842354QR3r3/.svsdvsdfqqfqef',
  jwtSecretActivateSpace: 'acbfsbfbsvb69asdadjukQR3r3/.svsdvsdfqqfqef',
  jwtSecretInviteToProject: 'acbfsbfbsvb694842354QR3r3/.aefeqfqefqqfqef',
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
  redisExpireIn: process.env.REDIS_EXPIRE_IN || 60 * 60 * 24, // expires in a day
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
      'MIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQCMQBdUOFnCXpQB\n' +
      'KI7SfLv8wKRAfGjtE+0gRai2KYo1WeR1fS4ziTmt5wwZYxhW5iUqshEh6m+3DGEw\n' +
      '0surO3SNy0EpFcI+iFB6Rtc3Ijsfuob2c0TpZ6sy9LK+626T0GfVTPj2deck8E4k\n' +
      'riqX1oW/sbDiAVw9dyBgDo1K6MEnx/bKDy+OSr3hDp0Zb7jqaVLNvee1nkykv1bL\n' +
      'HkKJTemu9TlVJR+0yktPZ6+4ZYzgIUUjblDvVCxW0MC70nMj0V4J3b5aDhRR5v/B\n' +
      '3sZPAYqtQ40I7Yosh31RfjcyDEoVuWhj5fLvwb+Z0HlcuWqKK74wetMXh2NUX7SE\n' +
      'o5kWJy9LAgMBAAECggEBAIRxjdZRtKnx6LDDXUR22IvSXAotsmSYGakNP0pvJf5F\n' +
      '2pH82eF/KEIKW4mp4/VENzr/l2BA5Kim/y09E2qrpeC1Xd5vltS4o88lEN4W7GCF\n' +
      'JCieKCiGZsyi+h2DdRQPjc6HduA/7T0b1Z+b/csPoZSqN9Dl2faNhbxQYauo66cl\n' +
      'Iz7czs8Xly5/FzJn8jRKmUCWE48v4hsGDW3oy1TysImvpCXpJuyX8XMgAx9yVKll\n' +
      'j5ZgBzb6espYWowiGz3v+CU6/TM8TtvUqvX3RQalnaqp6Yp6lmNtlSEAm57mtNCR\n' +
      'Bp0APuwZI9I87rIMM+uYQW8JUf/oD9PDCZUdqRcusOECgYEA9203SUWJ491+YwZQ\n' +
      'UUqYKziwIBA6y8PQLukYBIwzMXqHLb4o1Q1/OFwfZP+UcQZiDD3iEN71/QG4cono\n' +
      'QoQBv2l7Q95kfc2HwUOq+4UOQc7LIz2PkGTF5/2lr+dV2rxXBnX1aqlVxXxIz2L6\n' +
      'FTa3+UNE3JffxbXUP8jcei/5MzECgYEAkRwsj7aNrKpxVUP9bgBuvxuC8rBQuQkK\n' +
      'WuoPgKxbXJ5OLciPOhJR6242Fh3xTV+Fx5RH5bYx4FbuUSE89WC83EzKdVx4u2rs\n' +
      'KTd20asJPESt6cDkokP/k/OpjXHbyLYtfCqxKITubqyqA2J/vFc2Jgt5V1cJ75AY\n' +
      'w3hPvxM30zsCgYEA27cjkjBrK2rkMeFIb3ezOyZi2IYxAANJmm6pQliRmU16PveP\n' +
      'YOpUX+MGifSfh+KoLMDDQEIN5PejKCsokfCRcL2llXYmfMSH2epSKnpUV8HgB9JB\n' +
      '63JhgApxGIxwZAY9rWIQZgArR2x/Z5I4C6CErJe8zbscHoDCE0Y161cwjvECgYBo\n' +
      'dlrR/n5RHcZGtpJbvS38n8aOBUWnXw24UyVj4TBIJaJsLSSGjqewj3+aPmX26Fw7\n' +
      'R9DWWmnfcVVQzFfA4ao0AYgCIta7PQbTyRzdZX5Zh6uXSoiNE9yKWu/lZmDtRdDK\n' +
      'wUUVwVSQEfa2RxNjt3jAvKPWr070ycw584OdLy2R/wKBgQCbaO5rc2ixepMh3hwz\n' +
      'X0os4VYmmKeVHe9hDM9HrWm3AHSyTM8ca32l31+5Q11Xu9BFRCp/1smKFO7otNAZ\n' +
      'OEjGH6uGaWGjTOFGEO+RynQHET1tJvKcynnIwnIpqf7Jo4ZFg4i278sfZekTNIRn\n' +
      'KvfR4CgMgUomvsMlJE9nsINbDA==\n' +
      '-----END PRIVATE KEY-----\n',
    appId: 'vpaas-magic-cookie-3157909463504c28a75d5418205b11aa',
    kid: 'vpaas-magic-cookie-3157909463504c28a75d5418205b11aa/fbc5bb',
    jwtExpire: '6000m',
    jwtAlg: 'RS256',
    authorization: '8vzPw6mYbTZBlopkHwxFgCZASWB67d0Qx4rrd31Y4uahCoujoV',
    redisExpireIn: 60 * 60 * 24 * 2, // expires in a 2 days
  },
};
