import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

/** add user to your contact */
export class CreateContactReqDto {
  @ApiProperty({ required: true, format: 'number' })
  @IsNotEmpty()
  @IsNumber()
  public contactUserId: number;
}
