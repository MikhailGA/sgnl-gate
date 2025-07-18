import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SimpleDto } from '../dto/simple.dto';
import { simulateResponseDelay } from '../utils/mockSpeed';
import { Repository } from 'typeorm';
import { CreateFileDto } from '../dto/create-file.dto';
import { UploadFileDto } from '../dto/upload-file.dto';
import { File } from '../entities/file.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class FileService {
  constructor(
    @InjectRepository(File)
    private fileRepository: Repository<File>,
  ) {}

  async create(createFileDto: CreateFileDto): Promise<SimpleDto> {
    const folder = this.fileRepository.create(createFileDto);

    return this.fileRepository.save(folder).then(({ id }) => {
      return { id };
    });
  }

  async upload(uploadFileDto: UploadFileDto): Promise<SimpleDto> {
    await simulateResponseDelay({
      fileSizeBytes: uploadFileDto.size,
      speedBytesPerSec: 3000, // 3mb/sec
    });

    return { id: uuid() };
  }

  async findAll(): Promise<File[]> {
    return await this.fileRepository.find();
  }
}
