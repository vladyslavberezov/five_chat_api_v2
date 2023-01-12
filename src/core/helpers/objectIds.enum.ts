/** operationIds */
export enum OperationIds {

  HEALTH_CHECK = 'getHealth',

  USERS_FIND_ONE = 'findOne',
  USERS_CREATE = 'create',
  USERS_GET_ME = 'getMe',

  AUTH_REGISTER = 'register',
  AUTH_LOGIN = 'login',
  AUTH_FORGOT = 'forgotPassword',
  AUTH_RESET = 'resetPassword',
  AUTH_BY_TOKEN = 'authByToken',
  AUTH_RESEND_ACTIVATION_LINK = 'resendActivateLink',
  AUTH_USER_CONFIRM = 'userConfirm',
  AUTH_RESET_CHECK = 'resetPasswordCheck',

}
