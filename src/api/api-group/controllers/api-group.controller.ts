import { Controller, Get } from '@nestjs/common';
import { GroupService } from 'src/business/group/group.service';

@Controller()
export class ApiGroupController {
  constructor(private readonly groupService: GroupService) { }

  @Get()
  getHello(): string {
    return this.groupService.getHello();
  }
}
