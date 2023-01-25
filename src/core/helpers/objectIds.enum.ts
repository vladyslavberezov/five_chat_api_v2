/** operationIds */
export enum OperationIds {
  HEALTH_CHECK = 'getHealth',

  USERS_FIND_ONE = 'findOne',
  USERS_CREATE = 'create',
  USERS_GET_ME = 'getMe',

  CONTACT_ADD = 'add contact',
  GET_USER_CONTACTS = 'get user contacts',
  DELETE_USER_CONTACT = 'delete user contact',

  CHAT_CREATE = 'create chat',
  CHATS_GET_ALL = 'get all user chats',
  UPDATE_USER_CHAT = 'update user chat',
  DELETE_USER_CHAT = 'delete user chat',

  AUTH_REGISTER = 'register',
  AUTH_LOGIN = 'login',
  AUTH_FORGOT = 'forgotPassword',
  AUTH_RESET = 'resetPassword',
  AUTH_BY_TOKEN = 'authByToken',
  AUTH_RESEND_ACTIVATION_LINK = 'resendActivateLink',
  AUTH_USER_CONFIRM = 'userConfirm',
  AUTH_RESET_CHECK = 'resetPasswordCheck',
}
