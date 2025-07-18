import { ApiProperty } from '@nestjs/swagger';

export class FileDto {
  @ApiProperty()
  id: string;

  @ApiProperty({
    description: 'file name',
    example: 'test.pdf',
  })
  name: string;

  @ApiProperty({
    description: 'objectId',
  })
  objectId: string;

  @ApiProperty({
    description: 'file size name',
    example: '1024',
  })
  size: number;
}
