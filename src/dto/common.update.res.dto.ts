import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

/** Update response */
export class CommonUpdateResDto {
  /** ok */
  @ApiProperty({
    format: 'number',
    required: true,
    description: 'ok',
  })
  @IsNumber()
  @IsNotEmpty()
  ok: number;

  /** nModified */
  @ApiProperty({
    format: 'number',
    required: true,
    description: 'nModified',
  })
  @IsNumber()
  @IsNotEmpty()
  nModified: number;

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
