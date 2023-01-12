/** Env specific config */
module.exports = {
  http: {
    port: process.env.PORT || 8000,
  },
  apiLink: process.env.APP_LINK,
  baseUrl: process.env.BASE_URL,
  mongo_url: process.env.MONGO_URL,
  mongo_url_test: process.env.MONGO_URL_TEST || 'mongodb://localhost:27017/musicroom-test',
  aws_bucket_name: process.env.AWS_S3_BUCKET_NAME,
  aws_dataroom_bucket_name: process.env.AWS_S3_DATAROOM_BUCKET_NAME || 'teamplate-storage-dev',
  aws_secret_access_key: process.env.AWS_SECRET_ACCESS_KEY,
  aws_access_key_id: process.env.AWS_ACCESS_KEY_ID,
  aws_access_region: process.env.AWS_ACCESS_REGION,
  jwtSecret: 'secretKey',
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
  cleanRolePermissions: true,
  firebase: {
    type: 'service_account',
    project_id: 'musicroom-dev',
    private_key_id: '74e040218ae333390dd6f72d53aa6c72728fd44b',
    private_key:
      '-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCXPGCTUOcZzStb\nUnVh02bzIOJZAkI8zeXNbKskdlvozjweyuaRZbJc0nj6e85qSc5U1HXFPSahmcwC\n+O+QoZN8u/6yMyKU+lhIWwGFimlo2vR/7C13wI6FzzT6Ug3+56MQ7XkuIl2+WhO9\nChZqkyqKM0a+BQJdBJq1fJy/jmadIRvW3vWuK6Z7tV7W6U0dWle2HTnxHC9Ks8Xj\nFDGRzb8D7XHhHVPLQ8FFw2VmLAeWm/jL4P47QScs4r0/57xPdcGf2yfGWKy3Z9v9\nbdav3hm1nY12BE1DkhPgMTATWmg39CosowB7das+6LyZh7JAwGE9KI69l9PYy7TF\nskxilUPZAgMBAAECggEAAJUWrnjmdxwYrYAjjNcSBr3Zn/EHNxB0rfOtYFil9dE/\nxddGTbIzJtflX4G+rwmCH7lJtEnyjQJ8qEV4HXbhcj+ZMTpzttckMmJsFBK9vDq/\n61HVebyXm5KX9jxSiKSeyIyLWcW2ntdAUr1sQ+sgB5UZM0faah3pDZOIWRrKWLuC\nxviuJdp0aHy5LWXPt0HMeYN6VcIFbvmyF3ecwpYVPwEYZ8yeStXeEfty3zV8eBAD\nzQRybYyGgvWx3v1vfMI+EXRdBkPfTiUqtiwqrYIvfT2NchYmeSY6ZvIIP203bVTU\nN/NfttyNTYArAYEYydj4oK+MGw+sg7Znx0szHZb6AwKBgQDO3TaduL2qb5mv7r9j\nMmDBzExx1rmYmkvZPvHd67Pam4caZtbYuKnHAaBNP0WgMvz81yI+99mz0zAoemc/\nskKGWsik6LANHKi8jvO3+HebLY7ivP4eflZdIrFMH2c8FOWkPkWQd71rRSFALXSo\nzKmdFESJafDpdT0w9mvGMR5URwKBgQC7KJNooPrRkrQO7s1GqjXEqn4yQ/lQu6a3\nFn3CvaSyXPO44pYKeHExx1CoT1b6DSO8vgGGTis5CcTQChkgq/96nvBN1LlXcl/x\nsOyfZiMKMGhudnJR+FYLkGlm0nkzcLhNQQ/wlXvCq1JpmYl5sv9HxXR5cwcXfh79\nI8fpn1ZW3wKBgDA5ZbgTDzQiXCOldrx7TA8hv1hyhEXNAo2cnOntPrphs3c2LjPL\nqNiZynL3oxWbjVqsFHG1eezv+LQXBObWeae0lj3LeO81lSiP8sUaiVeFoV++S0d0\nkFGZ+tcSIxDglkBZvAHXyDKvpPa/IgkP3SKfTPLz3ZOvHxrA95L2dGmVAoGABQgo\nPm3lkHDjSmt9NWMqIul6jxtovpTs/IssQmoa3XjGTLg61Hk8gdwb/Qp1CjAEP/TT\n0aqUWuo6UmWTG1/EdKWFTHJlsUYv8i2Rjw+N7Z4zkJS6qh2FIrZ1PwB1pb5oFhuj\ntBIwy6ETjCdGnPEFEAbtBL7k9+q6JpAptcxE4/0CgYBEAkEbmIjpss0oiDMlbKXl\n22+NLBFrqxN1v1RUGuIwNVGbcEQPR8pWdeiumvIBI41y/4dJz4fZ2lI2Si1xJu+a\nZ5GBOlDBcoO4/Q9lCTqdmJHqRuBCyjMrdkjVeQA43GGOUsNEUfzeNIZVCwzsaYW7\nl40aKfRCLp5lQX3RSKW0GQ==\n-----END PRIVATE KEY-----\n',
    client_email: 'firebase-adminsdk-2a2bi@musicroom-dev.iam.gserviceaccount.com',
    client_id: '114399370326207548808',
    auth_uri: 'https://accounts.google.com/o/oauth2/auth',
    token_uri: 'https://oauth2.googleapis.com/token',
    auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
    client_x509_cert_url:
      'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-2a2bi%40musicroom-dev.iam.gserviceaccount.com',
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
