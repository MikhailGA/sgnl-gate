import { ApiProperty } from '@nestjs/swagger';

export class DeleteFileDto {
  @ApiProperty({ type: [String] })
  ids: string[];
}
