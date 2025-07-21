import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UploadFileDto } from '../dto/upload-file.dto';
import { CreateFileDto } from '../dto/create-file.dto';
import { SimpleDto } from '../dto/simple.dto';
import { FileEntity } from '../entities/file.entity';
import { FileService } from '../services/file.service';
import { AdvancedApiOperation } from '../utils';
import { DeleteFileDto } from '../dto/delete-file.dto';

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
  @ApiConsumes('multipart/form-data')
  @ApiBody({ type: UploadFileDto })
  @ApiResponse({
    status: 201,
    description: 'file successfully created',
    type: SimpleDto,
  })
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log('🚀 ~ FileController ~ uploadFile ~ file:', file);
    try {
      return await this.fileService.upload();
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
    type: [FileEntity],
  })
  async findAll(): Promise<FileEntity[]> {
    return await this.fileService.findAll();
  }

  @Delete('delete')
  @AdvancedApiOperation()
  @ApiResponse({
    status: 201,
    description: 'delete files',
  })
  async delete(@Body() payload: DeleteFileDto): Promise<void> {
    await this.fileService.remove(payload);
  }
}
