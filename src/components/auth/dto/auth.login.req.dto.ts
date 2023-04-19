import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

/** login payload */
export class AuthLoginReqDto {
  // /** nickname */
  // @ApiProperty({
  //   description: 'nickname',
  //   required: false,
  //   format: 'string',
  // })
  // @IsString()
  // nickname?: string;

  /** nickname */
  @ApiProperty({
    description: 'userCred',
    required: true,
    format: 'string',
  })
  @IsNotEmpty()
  @IsString()
  userCred: string;

  /** password */
  @ApiProperty({
    description: 'password',
    required: true,
    format: 'string',
  })
  @IsNotEmpty()
  @IsString()
  password: string;
}
