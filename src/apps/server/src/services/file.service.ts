import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteFileDto } from '../dto/delete-file.dto';
import { In, Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { CreateFileDto } from '../dto/create-file.dto';
import { SimpleDto } from '../dto/simple.dto';
import { FileEntity } from '../entities/file.entity';

@Injectable()
export class FileService {
  constructor(
    @InjectRepository(FileEntity)
    private fileRepository: Repository<FileEntity>,
  ) {}

  async create(createFileDto: CreateFileDto): Promise<SimpleDto> {
    const folder = this.fileRepository.create(createFileDto);

    return this.fileRepository.save(folder).then(({ id }) => {
      return { id };
    });
  }

  async upload(): Promise<SimpleDto> {
    return { id: uuid() };
  }

  async findAll(): Promise<FileEntity[]> {
    return await this.fileRepository.find();
  }

  async remove(payload: DeleteFileDto): Promise<void> {
    await this.fileRepository.softDelete({
      id: In(payload.ids),
    });

    return;
  }
}
