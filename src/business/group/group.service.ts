import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateGroupDto } from 'src/shared/dto/admin/group/create-group.dto';
import { UpdateGroupDto } from 'src/shared/dto/admin/group/update-group.dto';
import { Collaborator } from 'src/shared/entity/collaborator/collaborator';
import { Group } from 'src/shared/entity/group/group';
import { Place } from 'src/shared/entity/place/place';
import { Vehicle } from 'src/shared/entity/vehicle/vehicle';
import { Repository } from 'typeorm';
import { CrudService } from '../abstracts/crud-service';

@Injectable()
export class GroupService extends CrudService<Group, CreateGroupDto, UpdateGroupDto>  {
  getInstance(): Group {
    throw new Group()
  }

  constructor(
    @InjectRepository(Group)
    private repository: Repository<Group>,
  ) {
    super(repository)
  }

  getHello(): string {
    return 'GroupService.getHello';
  }

  async findAllChildByGroup(id: string, fieldName: string) {
    const group = await this.repository.findOneBy({ id } as any);
    if(!group) {
      throw new Error("Group not found");
    }
     group[fieldName] =  group[fieldName] || [];
    return group[fieldName];
  }

  async findOneChildByGroup(id: string, itemId: string, fieldName: string) {
    const group = await this.repository.findOneBy({ id } as any);
    if(!group) {
      throw new Error("Group not found");
    }
     group[fieldName] =  group[fieldName] || [];
    return group[fieldName].find((item) => item.id === itemId);
  }
  
  async add(id: string, item: any, fieldName: string) {
    const group = await this.repository.findOneBy({ id } as any);
    if(!group) {
      throw new Error("Group not found");
    }
    group[fieldName] =  group[fieldName] || [];
    item.group = group;
    group[fieldName].push(item);
    return await this.repository.save(group);
  }

  async addCollaborator(id: string, item: Collaborator) {
    return await this.add(id, item, 'collaborators');
  }

  async addPlace(id: string, item: Place) {
    return await this.add(id, item, 'places');
  }
  
  async addVehicle(id: string, item: Vehicle) {
    return await this.add(id, item, 'places');
  }

  async removeChild(id: string, itemId: string, fieldName: string) {
    const group = await this.repository.findOneBy({ id } as any);
    if(!group) {
      throw new Error("Group not found");
    }
    group[fieldName] = group[fieldName].filter((curr) => curr.id  !== itemId);
    return await this.repository.save(group);
  }

  async removeCollaborator(id: string, itemId: string) {
    return await this.removeChild(id, itemId, 'collaborators');
  }

  async removePlace(id: string, itemId: string) {
    return await this.removeChild(id, itemId, 'places');;
  }

  async removeVehicle(id: string, itemId: string) {
    return await this.removeChild(id, itemId, 'vehicles');

  }

}
