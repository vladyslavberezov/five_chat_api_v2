import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ChatService } from './chat.service';
import { CreateChatReqDto } from './dto/create-chat.dto';
import { ApiBody, ApiOperation, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { OperationIds } from '../../core/helpers/objectIds.enum';
import { ICommonUserDataReq } from '../../dto/common.user.data.req';
import { User } from '../../core/decorators/user.decorator';
import { CHAT_TAG } from '../../docs/tags';
import { ComposeAuthDecorator } from '../../core/decorators/compose-auth.decorator';
import { Chat, TModelChat } from './entities/chat.entity';
import { UserChats } from './user-chats/entities/user-chats.entity';
import { UpdateChatReqDto } from './dto/update-chat.dto';

@ApiTags(CHAT_TAG)
@Controller(CHAT_TAG)
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  /**
   * / endpoint handler - add contact
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
  createChat(@User() user: ICommonUserDataReq, @Body() body: CreateChatReqDto) {
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
   * / endpoint handler - delete user from contact
   * @param user
   * @param param - chat id
   * @param query
   * @returns id of deleted chat
   */
  @Delete('/:id')
  @ComposeAuthDecorator()
  @ApiParam({ required: true, name: 'id', description: 'id' })
  @ApiQuery({ name: 'forAll' })
  @ApiOperation({
    description: 'delete chat',
    operationId: OperationIds.DELETE_USER_CHAT,
  })
  deleteUserContact(@User() user: ICommonUserDataReq, @Param() param, @Query() query): Promise<UserChats | number> {
    return this.chatService.deleteChat(user.userId, param.id, query);
  }

  /**
   * / endpoint handler - update chat
   * @param body
   * @param param - chat id
   * @returns
   */
  @Put('/:id')
  @ComposeAuthDecorator()
  @ApiOperation({
    description: 'delete chat',
    operationId: OperationIds.DELETE_USER_CHAT,
  })
  updateUserChat(@Body() body: UpdateChatReqDto, @Param() param): Promise<Chat> {
    return this.chatService.updateChat({ chatId: param.id, title: body.title });
  }
}
