import { Controller, Get } from '@nestjs/common';
import { AdminService } from 'src/business/admin/admin.service';

@Controller()
export class ApiAdminController {
  constructor(private readonly adminService: AdminService) { }

  @Get()
  getHello(): string {
    return this.adminService.getHello();
  }
}
