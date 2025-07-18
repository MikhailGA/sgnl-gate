import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class UploadFileDto {
  @ApiProperty()
  @IsNumber()
  size: number;
}
