import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, IsUUID } from 'class-validator';

/** save message in db */
export class SaveMessageReqDto {
  @ApiProperty({ required: true, format: 'number' })
  @IsNotEmpty()
  @IsNumber()
  public userChatId: number;

  @ApiProperty({ required: true, format: 'string' })
  @IsNotEmpty()
  @IsString()
  public message: string;

  @ApiProperty({ required: true, format: 'string' })
  @IsUUID()
  @IsNotEmpty()
  @IsString()
  public uuid: string;
}
