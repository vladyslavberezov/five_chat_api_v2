import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

/** Delete response */
export class CommonDeleteResDto {
  /** ok */
  @ApiProperty({
    format: 'number',
    required: true,
    description: 'ok',
  })
  @IsNumber()
  @IsNotEmpty()
  ok: number;

  /** n */
  @ApiProperty({
    format: 'number',
    required: true,
    description: 'n',
  })
  @IsNumber()
  @IsNotEmpty()
  n: number;
}
