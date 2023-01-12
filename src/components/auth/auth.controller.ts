import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common'
import { AuthService } from './auth.service'
import {
  ApiBody,
  ApiForbiddenResponse,
  ApiInternalServerErrorResponse,
  ApiOperation,
  ApiResponse, ApiTags,
} from '@nestjs/swagger'
import { OperationIds } from '../../core/helpers/objectIds.enum'
import { AuthLoginReqDto } from './dto/auth.login.req.dto'
import { AuthLoginResDto } from './dto/auth.login.res.dto'
import { CommonServerErrorResDto } from '../../dto/common.server-error.res.dto'
import { AUTH_TAG } from '../../docs/tags'

@ApiTags(AUTH_TAG)
@Controller(AUTH_TAG)
@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {
  }

  /**
   * /login endpoint handler - create access token if user exists
   * @returns {AuthLoginResDto} - authenticated user, access token
   */
  @Post('login')
  @ApiOperation({ description: 'login user', operationId: OperationIds.AUTH_LOGIN })
  @ApiBody({ type: AuthLoginReqDto })
  @ApiResponse({ status: 200, description: 'OK', type: AuthLoginResDto })
  @ApiForbiddenResponse({ description: 'Invalid credentials' })
  @ApiInternalServerErrorResponse({
    type: CommonServerErrorResDto,
    description: 'internal server error',
  })
  async login(@Body() data: AuthLoginReqDto): Promise<UnauthorizedException | { accessToken: string, expiresAt: Date }> {
    return this.authService.loginWithCredentials(data)
  }
}