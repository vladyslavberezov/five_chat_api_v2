import { ApiProperty } from '@nestjs/swagger';
import { IsDate } from 'class-validator';

/** login response */
export class AuthLoginResDto {
  /** access jwt token */
  @ApiProperty({
    format: 'string',
  })
  accessToken: string;

  @ApiProperty({ required: true, format: 'date' })
  @IsDate()
  expiresAt: string;
}
