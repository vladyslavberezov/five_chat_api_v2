import { ApiProperty } from '@nestjs/swagger'
import {
  IsString,
  IsNotEmpty,
  IsEmail,
  IsOptional,
  MinLength,
} from 'class-validator'
import { IsValidPassword } from '../../../core/validators'

/** register user payload */
export class CreateUserReqDto {
  @ApiProperty({ required: false, format: 'string' })
  @IsOptional()
  @IsString()
  public firstName?: string

  @ApiProperty({ required: false, format: 'string' })
  @IsOptional()
  @IsString()
  public lastName?: string

  @ApiProperty({ required: true, format: 'string' })
  @IsString()
  @MinLength(2)
  public nickname: string

  @ApiProperty({ required: true, format: 'string' })
  @IsString()
  @IsValidPassword()
  public password: string

  @ApiProperty({ required: false, format: 'string' })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @IsEmail({
    allow_ip_domain: false,
    domain_specific_validation: true,
  })
  public email?: string


}
