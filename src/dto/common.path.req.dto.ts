import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';

/** id request */
export class CommonPathReqDto {
  /** id */
  @ApiProperty({ required: true, format: 'string' })
  @Transform((v) => {
    console.log('v', v);
    return v;
  })
  id: string;
}
