import { Controller, Get, Post, Body, Logger, Request } from '@nestjs/common';
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
   * @param req
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
  addContact(@Body() body: CreateContactReqDto, @Request() req): Promise<TModelContact> {
    return this.contactsService.addContact(req.user.userId, body.contactUserId);
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
  getUserContacts(@Request() req) {
    return this.contactsService.getUserContacts(req.user.userId);
  }

  //
  // @Get()
  // getAll() {
  //   return this.usersService.getAll()
  // }
  //
  // @Get('/me')
  // findMe( @Param('id') id: string ) {
  //   return this.usersService.findOne(+id)
  // }
  //
  // @Delete(':id')
  // delete( @Param('id') id: string ) {
  //   return this.usersService.delete(+id)
  // }
  //
  // @Get(':id')
  // findOne( @Param('id') id: string ) {
  //   return this.usersService.findOne(+id)
  // }
  //
  // @Get(':id/contact')
  // getUserContacts( @Param('id') id: string ) {
  //   return this.contactService.findOne(+id)
  // }
  //
  // @Post(':id/contact')
  // addContact( @Body() UserDto: UserDto ) {
  //   return this.contactService.create(UserDto)
  // }
  //
  // @Delete(':id/contact/:contactId')
  // deleteContact( @Param('id') id: string ) {
  //   return this.contactService.delete(+id)
  // }

  // @Patch(':id')
  // update( @Param('id') id: string, @Body() updateUserDto: UpdateUserDto ) {
  //   return this.usersService.update(+id, updateUserDto)
  // }
}
