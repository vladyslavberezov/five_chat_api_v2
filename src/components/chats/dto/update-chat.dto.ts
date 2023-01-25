import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

/**   */
export class UpdateChatReqDto {
  @ApiProperty({ required: true, format: 'string' })
  @IsString()
  title: string;
}
