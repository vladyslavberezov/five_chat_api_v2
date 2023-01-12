import { ApiProperty } from '@nestjs/swagger'
import { IsString, IsNotEmpty } from 'class-validator'


/** login payload */
export class AuthLoginReqDto {

  /** nickname */
  @ApiProperty({
    description: 'nickname',
    required: true,
    format: 'string',
  })
  @IsString()
  @IsNotEmpty()
  nickname: string

  /** password */
  @ApiProperty({
    description: 'password',
    required: true,
    format: 'string',
  })
  @IsString()
  @IsNotEmpty()
  password: string
}
