import { IsString, IsBoolean, IsOptional, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateFolderDto {
  @ApiProperty({ description: 'Folder name', required: false })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({ description: 'Folder permissions', required: false })
  @IsBoolean()
  @IsOptional()
  permissions?: boolean;

  @ApiProperty({ description: 'Parent folder ID', required: false })
  @IsNumber()
  @IsOptional()
  parentId?: number;
}
