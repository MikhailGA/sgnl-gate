import { ApiProperty } from '@nestjs/swagger';

export class CreateFileDto {
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
