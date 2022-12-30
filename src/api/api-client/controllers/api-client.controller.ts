import { Controller, Get } from '@nestjs/common';
import { ClientService } from '../../../business/client/client.service';

@Controller()
export class ApiClientController {
  constructor(private readonly clientService: ClientService) { }

  @Get()
  getHello(): string {
    return this.clientService.getHello();
  }
}
