import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from '../modules/user.module';
import { FolderModule } from '../modules/folder.module';
import { DatabaseSeedService } from '../services/database-seed.service';
import { User } from '../entities/user.entity';
import { Folder } from '../entities/folder.entity';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: join(process.cwd(), '.runtime', 'database.sqlite'),
      entities: [User, Folder],
      synchronize: true, // В продакшене следует использовать migrations
      logging: process.env.NODE_ENV === 'development',
    }),
    UserModule,
    FolderModule,
  ],
  controllers: [AppController],
  providers: [AppService, DatabaseSeedService],
})
export class AppModule {}
