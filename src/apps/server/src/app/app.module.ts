import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from '../modules/user.module';
import { User } from '../entities/user.entity';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: join(process.cwd(), '.runtime', 'database.sqlite'),
      entities: [User],
      synchronize: true, // В продакшене следует использовать migrations
      logging: process.env.NODE_ENV === 'development',
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
