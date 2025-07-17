import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Tree,
  TreeChildren,
  TreeParent,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { FolderDto, RootFolderDto } from '../dto/folder.dto';

@Entity('folders')
@Tree('closure-table')
export class Folder {
  @ApiProperty({ description: 'Unique folder identifier' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'Folder name' })
  @Column({ type: 'varchar', length: 255 })
  name: string;

  @ApiProperty({ description: 'Folder permissions' })
  @Column({ type: 'boolean', default: true })
  permissions: boolean;

  @ApiProperty({ description: 'Parent folder', required: false })
  @TreeParent()
  parent?: Folder;

  @ApiProperty({ description: 'Child folders', type: () => [Folder] })
  @TreeChildren()
  children: Folder[];

  @ApiProperty({ description: 'Record creation date' })
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({ description: 'Last update date' })
  @UpdateDateColumn()
  updatedAt: Date;

  static toDto(folder: Folder): FolderDto {
    return {
      id: folder.id,
      name: folder.name,
      permissions: folder.permissions,
      children: folder.children.map((child) => Folder.toDto(child)),
    };
  }

  static toRootDto(folder: Folder): RootFolderDto {
    return {
      id: folder.id,
      name: folder.name,
    };
  }
}
