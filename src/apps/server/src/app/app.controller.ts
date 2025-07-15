import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { AdvancedApiOperation } from '../utils';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @AdvancedApiOperation()
  @Get()
  getData() {
    return this.appService.getData();
  }
}
