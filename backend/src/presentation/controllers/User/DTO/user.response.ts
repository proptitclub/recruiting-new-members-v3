import { ApiProperty } from '@nestjs/swagger';

export class UserResponse {
  @ApiProperty()
  id: string;
  @ApiProperty()
  fullname?: string;
  @ApiProperty()
  username: string;
  @ApiProperty()
  description?: string;
  @ApiProperty()
  timesend: Date;
  @ApiProperty()
  timeUpdate: Date;
}
