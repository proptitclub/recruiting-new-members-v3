import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UpdateUserDTO {
  @ApiProperty({ nullable: true })
  @IsString()
  fullname?: string;

  @ApiProperty({ nullable: true })
  @IsString()
  email?: string;

  @ApiProperty({ nullable: true })
  @IsString()
  description?: string;

  @ApiProperty({ nullable: true })
  @IsString()
  status?: string;
}
