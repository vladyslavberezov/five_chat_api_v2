import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

/** update message in db */
export class ChatsMessageUpdateReqDto {
  @ApiProperty({ required: false, format: 'number' })
  @IsNotEmpty()
  @IsNumber()
  public userChatId?: number;

  @ApiProperty({ required: false, format: 'string' })
  @IsNotEmpty()
  @IsString()
  public message?: string;

  @ApiProperty({ required: true, format: 'number' })
  public chatId: number;

  @ApiProperty({ required: false, format: 'string' })
  @IsString()
  public uuid: string;
}
