import { Body, Controller, Delete, Get, Logger, Post, Request } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserReqDto } from './dto/create-user.dto';
import { ApiBody, ApiInternalServerErrorResponse, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { OperationIds } from '../../core/helpers/objectIds.enum';
import { CommonSuccessResDto } from '../../dto/common.success.res.dto';
import { CommonServerErrorResDto } from '../../dto/common.server-error.res.dto';
import { TModelUser } from './entities/user.entity';
import { ComposeAuthDecorator } from '../../core/decorators/compose-auth.decorator';
import { CreateContactReqDto } from './contacts/dto/create-contact.dto';
import { TModelContact } from './contacts/entities/contact.entity';
import { ContactService } from './contacts/contact.service';
import { DeleteContactDto } from './contacts/dto/delete-contact.dto';
import { ICommonUserDataReq } from '../../dto/common.user.data.req';
import { User } from '../../core/decorators/user.decorator';

@Controller('users')
export class UserController {
  private readonly logger = new Logger(UserController.name);

  constructor(private readonly usersService: UserService, private readonly contactsService: ContactService) {}

  /**
   * / endpoint handler - create user
   * // TODO: if success - sends verification link to the user's email
   * @param {CreateUserReqDto} body - create object
   * @returns {CommonSuccessResDto} - { success: true }
   */
  @Post()
  @ApiOperation({
    description: 'create user',
    operationId: OperationIds.USERS_CREATE,
  })
  @ApiBody({ type: CreateUserReqDto })
  @ApiResponse({
    status: 201,
    description: 'OK',
    type: CommonSuccessResDto,
  })
  @ApiInternalServerErrorResponse({
    type: CommonServerErrorResDto,
    description: 'internal server error',
  })
  create(@Body() body: CreateUserReqDto): Promise<TModelUser> {
    this.logger.log(`Create user: ${body.nickname}, ${body.email}`);

    return this.usersService.createUser(body);
  }

  /**
   * / endpoint handler - get one user
   * @returns {CommonSuccessResDto} - { success: true }
   */
  @Get('/me')
  @ComposeAuthDecorator()
  @ApiOperation({
    description: 'get me',
    operationId: OperationIds.USERS_GET_ME,
  })
  @ApiResponse({
    status: 200,
    description: 'OK',
  })
  @ApiInternalServerErrorResponse({
    type: CommonServerErrorResDto,
    description: 'internal server error',
  })
  getMe(@Request() req) {
    return req.user;
  }

  /**
   * / endpoint handler - add contact
   * @param {CreateContactReqDto} body - create object
   * @param user
   * @returns {CommonSuccessResDto} - { success: true }
   */
  @Post('contacts')
  @ComposeAuthDecorator()
  @ApiOperation({
    description: 'add contact',
    operationId: OperationIds.CONTACT_ADD,
  })
  @ApiBody({ type: CreateContactReqDto })
  @ApiResponse({
    status: 201,
    description: 'OK',
    type: CommonSuccessResDto,
  })
  @ApiInternalServerErrorResponse({
    type: CommonServerErrorResDto,
    description: 'internal server error',
  })
  addContact(@Body() body: CreateContactReqDto, @User() user: ICommonUserDataReq): Promise<TModelContact> {
    return this.contactsService.addContact(user.userId, body.contactUserId);
  }

  /**
   * / endpoint handler - get user contacts
   * @returns
   */
  @Get('contacts')
  @ComposeAuthDecorator()
  @ApiOperation({
    description: 'get user contacts',
    operationId: OperationIds.GET_USER_CONTACTS,
  })
  @ApiResponse({
    status: 200,
    description: 'OK',
  })
  @ApiInternalServerErrorResponse({
    type: CommonServerErrorResDto,
    description: 'internal server error',
  })
  getUserContacts(@User() user: ICommonUserDataReq) {
    return this.contactsService.getUserContacts(user.userId);
  }

  /**
   * / endpoint handler - delete user from contact
   * @param user
   * @param {DeleteContactDto} body - contact id to delete
   * @returns {CommonSuccessResDto} - { success: true }
   */
  @Delete('contact')
  @ComposeAuthDecorator()
  @ApiOperation({
    description: 'delete contact',
    operationId: OperationIds.DELETE_USER_CONTACT,
  })
  @ApiBody({ type: DeleteContactDto })
  @ApiResponse({
    status: 201,
    description: 'OK',
    type: CommonSuccessResDto,
  })
  @ApiInternalServerErrorResponse({
    type: CommonServerErrorResDto,
    description: 'internal server error',
  })
  deleteUserContact(@User() user: ICommonUserDataReq, @Body() body: DeleteContactDto): Promise<number> {
    return this.contactsService.deleteUserContact(user.userId, body.contactUserId);
  }
}
