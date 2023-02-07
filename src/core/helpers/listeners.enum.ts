/** listeners enums */
export enum ListenerEnum {
  CLIENT_CONNECT = 'client.connect',
  CLIENT_DISCONNECT = 'client.disconnect',

  COLUMNS_CREATE = 'columns.create',

  CALENDAR_EVENTS_CHECKS_INSERT_MANY = 'calendar-events-checks.insertMany',
  CALENDAR_EVENTS_CHECKS_DELETE = 'calendar-events-checks.delete',

  CALENDAR_EVENTS_UNASSIGN_USER = 'calendar-events.unassign.user',

  CALENDAR_EVENTS_CREATE = 'calendar-events.create',

  CHATS_MESSAGES_CONVERT = 'chats-messages.convert',

  CHATS_MESSAGES_RECONVERT = 'chats-messages.reconvert',

  CHATS_MESSAGES_LINK_OBJECT = 'chats-messages-link-object.create',

  NOTES_CREATE = 'notes.create',
  NOTES_CONVERT = 'notes.convert',
  NOTES_RECONVERT = 'notes.reconvert',
  NOTES_LABELS_DELETE = 'notes-labels.delete',

  BOARDS_UNASSIGN_USER = 'boards.unassign.user',
  BOARDS_TICKETS_LABELS_DELETE = 'boards.tickets-labels.delete',
  BOARDS_TICKETS_ESTIMATION_SESSION_UPDATE = 'boards.tickets-estimation-session.update',

  BOARDS_COMPLETE_DELETE = 'boards.complete.delete',
  ACTION_LOGS_COMPLETE_DELETE = 'action-logs.complete.delete',
  CHAT_COMPLETE_DELETE = 'chat.complete.delete',
  CALENDAR_EVENTS_COMPLETE_DELETE = 'calendar-events.complete.delete',
  EMOJIS_COMPLETE_DELETE = 'emojis.complete.delete',
  LANE_BOARDS_COMPLETE_DELETE = 'lane-boards.complete.delete',
  NOTEPADS_COMPLETE_DELETE = 'notepads.complete.delete',
  NOTES_COMPLETE_DELETE = 'notes.complete.delete',
  ROLES_MEMBERS_COMPLETE_DELETE = 'roles-members.complete.delete',
  NOTIFICATION_FILTERS_COMPLETE_DELETE = 'notification-filters.complete.delete',

  LANE_BOARD_UPDATE = 'lane-boards.update',

  SEND_NOTIFICATIONS_TO_RELATED_USERS = 'send-notifications-to-related-users',

  PROJECTS_CHANGE_ARCHIVE_STATUSES = 'projects-change-archive-statuses',
  PROJECTS_BULK_DELETE = 'projects-bulk.delete',
}
