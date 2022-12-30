import { Injectable, NestMiddleware } from '@nestjs/common';
import { GroupService } from 'src/business/group/group.service';

@Injectable()
export class GroupMiddleware implements NestMiddleware {
  static readonly GROUP_PARAM_KEY = 'group'

  constructor(private readonly groupService: GroupService) { }

  async use(req: any, res: any, next: () => void) {
    const groupId = req.params['group'];
    const group = await this.groupService.findOne(groupId);
    if (!group) {
      throw new Error(`Group not found for id: ${groupId}`);
    }
    res.locals.group = group;
    next();
  }
}
