import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AppService } from './app.service';
import { AdvancedApiOperation } from '../utils';

@ApiTags('App')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @AdvancedApiOperation()
  @Get()
  getData() {
    return this.appService.getData();
  }

  @AdvancedApiOperation()
  @ApiResponse({
    status: 200,
    description: 'Database connection status',
    schema: {
      type: 'object',
      properties: {
        database: { type: 'string', description: 'Database status' },
        timestamp: { type: 'string', description: 'Check timestamp' },
      },
    },
  })
  @Get('health/database')
  async checkDatabase() {
    return await this.appService.checkDatabaseConnection();
  }
}
