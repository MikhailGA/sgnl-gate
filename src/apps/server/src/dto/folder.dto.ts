import { ApiProperty } from '@nestjs/swagger';

export class FolderDto {
  @ApiProperty({
    description: 'Folder ID',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'Folder name',
    example: 'Documents',
  })
  name: string;

  @ApiProperty({
    description: 'Folder permissions',
    example: true,
  })
  permissions: boolean;

  @ApiProperty({
    description: 'Child folders',
    type: () => [FolderDto],
  })
  children: FolderDto[];
}

export class RootFolderDto {
  @ApiProperty({
    description: 'Folder ID',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'Folder name',
    example: 'Documents',
  })
  name: string;
}
