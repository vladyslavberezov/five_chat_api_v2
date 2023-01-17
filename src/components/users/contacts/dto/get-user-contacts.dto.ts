import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

/** add user to your contact */
export class getUserContactsReqDto {
  @ApiProperty({ required: true, format: 'number' })
  @IsNumber()
  @IsNotEmpty()
  public userId: number;
}
