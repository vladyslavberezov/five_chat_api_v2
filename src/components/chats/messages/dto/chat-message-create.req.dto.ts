import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

/** save message in db */
export class ChatsMessageCreateReqDto {
  @ApiProperty({ required: true, format: 'number' })
  @IsNotEmpty()
  @IsNumber()
  public chatId: number;

  @ApiProperty({ required: true, format: 'string' })
  @IsNotEmpty()
  @IsString()
  public message: string;
}
