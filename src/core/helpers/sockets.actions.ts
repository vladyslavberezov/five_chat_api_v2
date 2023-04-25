/** SOCKETS ACTIONS */
export enum SocketsActions {
  NOTIFICATION_SEND = 'notification:send:',

  CHATS_MESSAGE_CREATE = 'message:post',
  CHATS_MESSAGE_MARK_AS_READ = 'message:read:response',
  CHATS_MESSAGE_MARK_AS_READ_RESPONSE = 'message:read',
  CHATS_MESSAGE_DELETE = 'chats:delete',
  CHATS_MESSAGE_DELETE_RESPONSE = 'chats:delete:response',
  CHATS_MESSAGE_UPDATE = 'chats:update',
  CHATS_MESSAGE_UPDATE_RESPONSE = 'chats:update:response',

  CHAT_IS_HIDDEN_TOGGLE = 'chats:isHiddenToggle',
  CHAT_IS_HIDDEN_TOGGLE_RESPONSE = 'chats:isHiddenToggle:response',

  CHAT_MEMBER_GET_BY_CHAT_ID = 'chats:chatMemberGetByChatId',
  CHAT_MEMBER_GET_BY_CHAT_ID_RESPONSE = 'chats:chatMemberGetByChatId:response',

  CHATS_GET_CHATS = 'chats:getChats',
  CHATS_GET_CHATS_RESPONSE = 'chats:getChats:response',

  CHATS_GET_DIRECT_CHAT_ID_BY_USER_ID = 'chats:getDirectChatIdByUserId',
  CHATS_GET_DIRECT_CHAT_ID_BY_USER_ID_RESPONSE = 'chats:getDirectChatIdByUserId:response',

  CHATS_GET_MESSAGE_BY_THREAD_ID = 'chats:getChatsMessageByThreadId',
  CHATS_GET_MESSAGE_BY_THREAD_ID_RESPONSE = 'chats:getChatsMessageByThreadId:response',

  CHATS_GET_CHATS_MESSAGES = 'chats:getChatsMessages',
  CHATS_GET_CHATS_MESSAGES_RESPONSE = 'chats:getChatsMessages:response',

  CHATS_GET_THREADS_LIST = 'chats:getThreadsList',
  CHATS_GET_THREADS_LIST_RESPONSE = 'chats:getThreadsList:response',

  CHATS_GET_THREADS_COUNTERS = 'chats:getThreadsCounters',
  CHATS_GET_THREADS_COUNTERS_RESPONSE = 'chats:getThreadsCounters:response',

  CHATS_GET_THREAD_MESSAGES = 'chats:getThreadMessages',
  CHATS_GET_THREAD_MESSAGES_RESPONSE = 'chats:getThreadMessages:response',
  CHATS_CREATE_THREAD_MESSAGE = 'chats:createThreadMessage',
  CHATS_THREAD_MESSAGE_UPDATE = 'chats:thread:update',
  CHATS_THREAD_MESSAGE_DELETE = 'chats:thread:delete',
  CHATS_THREAD_MESSAGES_MARK_AS_READ = 'chats:threadMarkAsRead',
  CHATS_THREAD_MESSAGES_MARK_AS_READ_RESPONSE = 'chats:threadMarkAsRead:response',
  CHATS_THREAD_ALL_MARK_AS_READ = 'chats:threadMarkAllAsRead',
  CHATS_THREAD_ALL_MARK_AS_READ_RESPONSE = 'chats:threadMarkAllAsRead:response',

  CHATS_MARK_ALL_AS_READ = 'chats:markAllAsRead',
  CHATS_MARK_ALL_AS_READ_RESPONSE = 'chats:markAllAsRead:response',

  CHATS_CREATE_GROUP = 'chats:createGroup',
  CHATS_CREATE_GROUP_RESPONSE = 'chats:createGroup:response',

  CHATS_DELETE_GROUP = 'chats:deleteGroup',
  CHATS_DELETE_GROUP_RESPONSE = 'chats:deleteGroup:response',

  CHATS_EDIT_GROUP_NAME = 'chats:editGroupName',
  CHATS_EDIT_GROUP_NAME_RESPONSE = 'chats:editGroupName:response',

  CHATS_EDIT_GROUP_MEMBERS = 'chats:editGroupMembers',
  CHATS_EDIT_GROUP_MEMBERS_RESPONSE = 'chats:editGroupMembers:response',

  ACTIONS_LOGS_CREATE = 'actionsLog:create',

  USERS_NOTIFICATION_STATUS_GET_ONE = 'users:usersNotificationStatusesGetOne',
  USERS_NOTIFICATION_STATUS_SKIP = 'users:usersNotificationStatusesSkip',
  USERS_NOTIFICATION_STATUS_SKIP_RESPONSE = 'users:usersNotificationStatusesSkip:response',
  USERS_STATUSES_LIST = 'users:statusesList',

  TICKETS_MEMBERS_UPDATED = 'tickets:members:updated',

  EMOJIS_CREATED = 'emojis:created',
  EMOJIS_DELETED = 'emojis:deleted',

  FILTERS_RESPONSE = 'filters:response',

  VIDEO_CALLS_SEND_ACTION_RESPONSE = 'videoCalls:sendAction:response',

  LANE_BOARDS_UPDATE = 'laneBoards:update',
}
