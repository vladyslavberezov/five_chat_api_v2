import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { ComposeAuthDecorator } from '../../core/decorators/compose-auth.decorator';
import { User } from '../../core/decorators/user.decorator';
import { OperationIds } from '../../core/helpers/objectIds.enum';
import { CHAT_TAG } from '../../docs/tags';
import { ICommonUserDataReq } from '../../dto/common.user.data.req';
import { ChatService } from './chat.service';
import { CreateChatReqDto } from './dto/create-chat.dto';
import { UpdateChatReqDto } from './dto/update-chat.dto';
import { Chat, TModelChat } from './entities/chat.entity';
import { Message } from './messages/entities/message.entity';
import { MessageService } from './messages/message.service';

@ApiTags(CHAT_TAG)
@Controller(CHAT_TAG)
export class ChatController {
  constructor(private readonly chatService: ChatService, private readonly messageService: MessageService) {}

  /**
   * / endpoint handler - create chat
   * @param user
   * @param {CreateChatReqDto} body - create object
   * @returns {Promise<Chat>} - chat object
   */
  @Post()
  @ComposeAuthDecorator()
  @ApiOperation({
    description: 'create chat',
    operationId: OperationIds.CHAT_CREATE,
  })
  @ApiBody({ type: CreateChatReqDto })
  createChat(@User() user: ICommonUserDataReq, @Body() body: CreateChatReqDto): Promise<Chat> {
    return this.chatService.createChat(user.userId, body);
  }

  /**
   *  endpoint handler - get all user chats
   * @param user
   * @returns {Promise} - array with all user chats
   */
  @Get()
  @ComposeAuthDecorator()
  @ApiOperation({
    description: 'get all chats',
    operationId: OperationIds.CHATS_GET_ALL,
  })
  getAllUserChats(@User() user: ICommonUserDataReq): Promise<TModelChat[]> {
    return this.chatService.getAllUserChats(user.userId);
  }

  /**
   * / endpoint handler - delete chat
   * @param user - userId
   * @param id - id chat to delete
   * @param query -
   * @returns id of deleted chat
   */
  @Delete('/:id')
  @ComposeAuthDecorator()
  @ApiOperation({
    description: 'delete chat',
    operationId: OperationIds.DELETE_USER_CHAT,
  })
  @ApiParam({ required: true, name: 'id' })
  @ApiQuery({ name: 'forAll' })
  async deleteChat(@User() user: ICommonUserDataReq, @Param('id') id: string, @Query() query: string): Promise<any> {
    return this.chatService.deleteChat(user.userId, id, query);
  }

  /**
   * / endpoint handler - update chat
   * @param body - new title
   * @param id - chat id
   * @returns
   */
  @Put('/:id')
  @ComposeAuthDecorator()
  @ApiOperation({
    description: 'update chat',
    operationId: OperationIds.UPDATE_USER_CHAT,
  })
  updateUserChat(@Body() body: UpdateChatReqDto, @Param('id') id: string): Promise<Chat> {
    return this.chatService.updateChat(id, body.title);
  }

  /**
   * / endpoint handler - get all messages
   * @param user
   * @param id - chat id
   * @returns Promise<Message[]>
   */
  @Get('/:id/message')
  @ComposeAuthDecorator()
  @ApiOperation({
    description: 'get all messages',
    operationId: OperationIds.GET_ALL_MESSAGES,
  })
  getAllMessages(@User() user: ICommonUserDataReq, @Param('id') id: string): Promise<Message[]> {
    return this.messageService.getAll(user.userId, id);
  }
}
