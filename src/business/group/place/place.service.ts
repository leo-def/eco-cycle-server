import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePlaceDto } from '../../../shared/dto/group/place/create-place.dto';
import { UpdatePlaceDto } from '../../../shared/dto/group/place/update-place.dto';
import { Place } from '../../../shared/entity/place/place';
import { GroupService } from '../group.service';
import { GroupChildService } from '../group-child.service';

@Injectable()
export class PlaceService extends GroupChildService<Place, CreatePlaceDto, UpdatePlaceDto> {

  constructor(
    @InjectRepository(Place)
    private repository: Repository<Place>,
    private groupService: GroupService
  ) {
    super(repository, groupService, 'places')
  }
  
  getInstance() {
    return new Place();
  }
}