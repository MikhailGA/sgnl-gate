import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { File } from '../entities/file.entity';
import { FileService } from '../services/file.service';
import { FileController } from '../controllers/file.controller';

@Module({
  imports: [TypeOrmModule.forFeature([File])],
  controllers: [FileController],
  providers: [FileService],
  exports: [FileService],
})
export class FileModule {}
