import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';
import { AdvancedApiOperation } from './utils';

@ApiTags('AppController')
@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @AdvancedApiOperation()
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
