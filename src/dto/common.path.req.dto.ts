import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId } from 'class-validator';

/** id request */
export class CommonPathReqDto {
  /** id */
  @ApiProperty({ required: true, format: 'string' })
  @IsMongoId()
  id: string;
}
