import { Controller, Get } from '@nestjs/common';
import { BusinessService } from 'src/business/business.service';

@Controller()
export class ApiController {
  constructor(private readonly businessService: BusinessService) { }

  @Get()
  getHello(): string {
    return this.businessService.getHello();
  }
}
