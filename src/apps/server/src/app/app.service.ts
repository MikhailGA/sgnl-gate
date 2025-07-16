import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectDataSource()
    private dataSource: DataSource,
  ) {}

  getData(): { message: string } {
    return { message: 'Hello API' };
  }

  async checkDatabaseConnection(): Promise<{
    database: string;
    timestamp: string;
  }> {
    try {
      // Проверяем подключение к базе данных
      await this.dataSource.query('SELECT 1');
      return {
        database: 'connected',
        timestamp: new Date().toISOString(),
      };
    } catch {
      return {
        database: 'disconnected',
        timestamp: new Date().toISOString(),
      };
    }
  }
}
