import { IsString, IsBoolean, IsOptional, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateFolderDto {
  @ApiProperty({ description: 'Folder name' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'Folder permissions', default: true })
  @IsBoolean()
  @IsOptional()
  permissions?: boolean;

  @ApiProperty({ description: 'Parent folder ID', required: false })
  @IsNumber()
  @IsOptional()
  parentId?: number;
}
