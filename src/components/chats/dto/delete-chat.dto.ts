import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

/**  c */
export class DeleteChatReqDto {
  /** chat id */
  @ApiProperty({ required: true, format: 'string' })
  @IsNumber()
  id: string;
}
