import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';
import { IsValidPassword } from '../../../core/validators';

/** register user payload */
export class LoginUserDto {
  @ApiProperty({ required: true, format: 'string' })
  @IsString()
  @MinLength(2)
  public nickname: string;

  @ApiProperty({ required: true, format: 'string' })
  @IsString()
  @IsValidPassword()
  public password: string;
}
