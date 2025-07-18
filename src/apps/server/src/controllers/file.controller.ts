import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Logger,
  Post,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateFileDto } from '../dto/create-file.dto';
import { SimpleDto } from '../dto/simple.dto';
import { UploadFileDto } from '../dto/upload-file.dto';
import { File } from '../entities/file.entity';
import { FileService } from '../services/file.service';
import { AdvancedApiOperation } from '../utils';

@ApiTags('files')
@Controller('files')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Post('create')
  @AdvancedApiOperation()
  @ApiResponse({
    status: 201,
    description: 'file successfully created',
    type: SimpleDto,
  })
  async create(@Body() createFileDto: CreateFileDto): Promise<SimpleDto> {
    try {
      await this.fileService.create(createFileDto);
      return;
    } catch (error) {
      throw new HttpException(
        error.message || 'Failed to create file',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Post('upload')
  @AdvancedApiOperation()
  @ApiResponse({
    status: 201,
    description: 'file successfully created',
    type: SimpleDto,
  })
  async upload(@Body() uploadFileDto: UploadFileDto): Promise<SimpleDto> {
    try {
      return await this.fileService.upload(uploadFileDto);
    } catch (error) {
      throw new HttpException(
        error.message || 'Failed to create file',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Get()
  @AdvancedApiOperation()
  @ApiResponse({
    status: 200,
    description: 'List of all files',
    type: [File],
  })
  async findAll(): Promise<File[]> {
    return await this.fileService.findAll();
  }
}
