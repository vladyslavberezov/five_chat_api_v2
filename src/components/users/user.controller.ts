import {
  Controller,
  Get,
  Post,
  Body,
  Logger,
  Request,
} from '@nestjs/common'
import { UserService } from './user.service'
import { CreateUserReqDto } from './dto/create-user.dto'
import { ApiBody, ApiInternalServerErrorResponse, ApiOperation, ApiResponse } from '@nestjs/swagger'
import { OperationIds } from '../../core/helpers/objectIds.enum'
import { CommonSuccessResDto } from '../../dto/common.success.res.dto'
import { CommonServerErrorResDto } from '../../dto/common.server-error.res.dto'
import { TModelUser } from './entities/user.entity'
import { ComposeAuthDecorator } from '../../core/decorators/compose-auth.decorator'

@Controller('users')
export class UserController {
  private readonly logger = new Logger(UserController.name)

  constructor(
    private readonly usersService: UserService,
  ) {
  }

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
    this.logger.log(`Create user: ${body.nickname}, ${body.email}`)

    return this.usersService.createUser(body)
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
    console.log('req body', req.user)
    return req.user
  }

  // getMe(@Headers('Authorization') Authorization: string): Promise<TModelUser> {
  //   return this.usersService.getMe(Authorization)
  // }

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
