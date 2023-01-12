import { ApiProperty } from '@nestjs/swagger';

/** success response */
export class CommonSuccessResDto<T = null> {
  /** success status */
  @ApiProperty()
  success: boolean;

  /** success status */
  @ApiProperty()
  data?: T;
}
