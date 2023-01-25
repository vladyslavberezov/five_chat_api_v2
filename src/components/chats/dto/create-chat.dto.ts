import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsOptional, IsString } from 'class-validator';

/**  contactId[] */
export class CreateChatReqDto {
  @ApiProperty({ isArray: true })
  @IsArray()
  @IsOptional()
  contactUserId: number[];

  @ApiProperty({ required: true, format: 'string' })
  @IsString()
  title: string;
}
