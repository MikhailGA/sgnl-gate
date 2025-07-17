import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TreeRepository } from 'typeorm';
import { Folder } from '../entities/folder.entity';
import { CreateFolderDto } from '../dto/create-folder.dto';
import { UpdateFolderDto } from '../dto/update-folder.dto';

@Injectable()
export class FolderService {
  constructor(
    @InjectRepository(Folder)
    private folderRepository: TreeRepository<Folder>,
  ) {}

  async create(createFolderDto: CreateFolderDto): Promise<Folder> {
    const folder = this.folderRepository.create({
      name: createFolderDto.name,
      permissions: createFolderDto.permissions ?? true,
    });

    if (createFolderDto.parentId) {
      const parent = await this.folderRepository.findOne({
        where: { id: createFolderDto.parentId },
      });
      if (!parent) {
        throw new NotFoundException(
          `Parent folder with ID ${createFolderDto.parentId} not found`,
        );
      }
      folder.parent = parent;
    }

    return await this.folderRepository.save(folder);
  }

  async findAll(): Promise<Folder[]> {
    return await this.folderRepository.find({
      relations: ['parent', 'children'],
    });
  }

  async clear(): Promise<void> {
    return await this.folderRepository.clear();
  }

  async findOne(id: number): Promise<Folder> {
    const folder = await this.folderRepository.findOne({
      where: { id },
      relations: ['parent', 'children'],
    });
    if (!folder) {
      throw new NotFoundException(`Folder with ID ${id} not found`);
    }
    return folder;
  }

  async update(id: number, updateFolderDto: UpdateFolderDto): Promise<Folder> {
    const folder = await this.findOne(id);

    if (updateFolderDto.name !== undefined) {
      folder.name = updateFolderDto.name;
    }
    if (updateFolderDto.permissions !== undefined) {
      folder.permissions = updateFolderDto.permissions;
    }

    if (updateFolderDto.parentId !== undefined) {
      if (updateFolderDto.parentId === null) {
        folder.parent = null;
      } else {
        const parent = await this.folderRepository.findOne({
          where: { id: updateFolderDto.parentId },
        });
        if (!parent) {
          throw new NotFoundException(
            `Parent folder with ID ${updateFolderDto.parentId} not found`,
          );
        }
        folder.parent = parent;
      }
    }

    return await this.folderRepository.save(folder);
  }

  async remove(id: number): Promise<void> {
    const folder = await this.findOne(id);
    await this.folderRepository.remove(folder);
  }

  async getRootFolders(): Promise<Folder[]> {
    return await this.folderRepository.findRoots();
  }

  async getTree(rootId?: number): Promise<Folder | null> {
    let rootFolder: Folder;

    if (rootId) {
      // Получаем конкретную корневую папку по ID
      rootFolder = await this.findOne(rootId);
      // Проверяем, что это действительно корневая папка
      if (rootFolder.parent) {
        throw new NotFoundException(
          `Folder with id ${rootId} is not a root folder`,
        );
      }
    } else {
      // Получаем первую корневую папку (для обратной совместимости)
      const roots = await this.folderRepository.findRoots();
      if (roots.length === 0) {
        return null;
      }
      rootFolder = roots[0];
    }

    return await this.folderRepository.findDescendantsTree(rootFolder);
  }

  async getDescendants(id: number): Promise<Folder[]> {
    const folder = await this.findOne(id);
    return await this.folderRepository.findDescendants(folder);
  }

  async getAncestors(id: number): Promise<Folder[]> {
    const folder = await this.findOne(id);
    return await this.folderRepository.findAncestors(folder);
  }
}
