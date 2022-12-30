import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCollaboratorDto } from '../../../shared/dto/group/collaborator/create-collaborator.dto';
import { UpdateCollaboratorDto } from '../../../shared/dto/group/collaborator/update-collaborator.dto';
import { Collaborator } from '../../../shared/entity/collaborator/collaborator';
import { GroupChildService } from '../group-child.service';
import { GroupService } from '../group.service';

@Injectable()
export class CollaboratorService extends GroupChildService<Collaborator, CreateCollaboratorDto, UpdateCollaboratorDto> {

  constructor(
    @InjectRepository(Collaborator)
    private repository: Repository<Collaborator>,
    private groupService: GroupService
  ) {
    super(repository, groupService, 'collaborators')
  }

  getInstance() {
    return new Collaborator();
  }

}

