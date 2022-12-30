import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGroupDto } from '../../../shared/dto/admin/group/create-group.dto';
import { UpdateGroupDto } from '../../../shared/dto/admin/group/update-group.dto';
import { Group } from '../../../shared/entity/group/group';
import { CrudService } from '../../../business/abstracts/crud-service';

@Injectable()
export class GroupService extends CrudService<Group, CreateGroupDto, UpdateGroupDto> {

  constructor(
    @InjectRepository(Group)
    private repository: Repository<Group>,
  ) {
    super(repository)
  }

  getInstance() {
    return new Group();
  }
}
