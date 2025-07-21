import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FileEntity } from '../entities/file.entity';
import { FileModule } from '../modules/file.module';
import { join } from 'path';
import { Folder } from '../entities/folder.entity';
import { User } from '../entities/user.entity';
import { FolderModule } from '../modules/folder.module';
import { UserModule } from '../modules/user.module';
import { DatabaseSeedService } from '../services/database-seed.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: join(process.cwd(), '.runtime', 'database.sqlite'),
      entities: [User, Folder, FileEntity],
      synchronize: true, // Should use migrations in production
      logging: process.env.NODE_ENV === 'development',
    }),
    UserModule,
    FolderModule,
    FileModule,
  ],
  controllers: [AppController],
  providers: [AppService, DatabaseSeedService],
})
export class AppModule {}
