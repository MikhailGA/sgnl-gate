import { ApiProperty } from '@nestjs/swagger';
import { FileDto } from '../dto/file.dto';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('files')
export class File {
  @ApiProperty({ description: 'Unique folder identifier' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ description: 's3 object Id' })
  @Column({ type: 'uuid' })
  objectId: string;

  @ApiProperty({ description: 'file name' })
  @Column({ type: 'varchar', length: 255 })
  name: string;

  @ApiProperty({ description: 'file size' })
  @Column({ type: 'integer' })
  size: number;

  @ApiProperty({ description: 'Record creation date' })
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({ description: 'Last update date' })
  @UpdateDateColumn()
  updatedAt: Date;

  static toDto(file: File): FileDto {
    return {
      id: file.id,
      name: file.name,
      size: file.size,
      objectId: file.objectId,
    };
  }
}
