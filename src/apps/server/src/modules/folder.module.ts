import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Folder } from '../entities/folder.entity';
import { FolderService } from '../services/folder.service';
import { FolderController } from '../controllers/folder.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Folder])],
  controllers: [FolderController],
  providers: [FolderService],
  exports: [FolderService],
})
export class FolderModule {}
