import { Injectable } from '@nestjs/common';
import { FetchParams } from 'src/shared/dto/fetch/fetch-params';
import { Group } from 'src/shared/entity/group/group';
import { Repository } from 'typeorm';
import { CrudService } from '../abstracts/crud-service';
import { GroupService } from './group.service';

@Injectable()
export abstract class 

GroupChildService<T, C, U> extends  CrudService<T, C, U> {

  constructor(
    private _childRepository: Repository<T>,
    private _groupService: GroupService,
    private _fieldName: string
  ) {
    super(_childRepository);
  }

  async searchByGroup(params: FetchParams, group: Group) {
    const byGroupFindParams = ({ where: { group: { id: group.id } } }) as any;
    return await this.search(params, byGroupFindParams);
  }

  async createByGroup(dto: C, group: Group) {
    const item = this.getInstance();
    Object.assign(item, { ...dto, group });
    return await this._childRepository.save(item)
  }

  async updateByGroup(id: string, dto: U, group: Group) {
    const item = await this._childRepository.findOneBy({ id } as any)
    Object.assign(item, { ...dto, group });
    return await this._childRepository.save(item)
  }

  async removeByGroup(id, group){
    const item = await this.findOneByGroup(id, group);
    if(!item) {
      throw new Error('Item not found by group');
      
    }
    return await this.remove(id);
  }
  
  async findAllByGroup(group: Group) {
    return await this._childRepository.find({ where: { group: { id: group.id } } } as any);
  }

  async findOneByGroup(id: string, group: Group) {
    return await this._childRepository.findOne({ where: { id, group: { id: group.id } } } as any);
  }

  async createGroupChild(dto: C, groupId: string) {
    const item = await super.create(dto);
    this._groupService.add(groupId, item, this._fieldName);
  }
  
  async removeGroupChild(id: string, groupId: string) {
    const item = await super.remove(id);
    if(item?.raw?.id) {
      this._groupService.removeChild(groupId, item.raw.id, this._fieldName);
    }
  }
  
}
