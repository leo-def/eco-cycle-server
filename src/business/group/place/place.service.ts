import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePlaceDto } from 'src/shared/dto/group/place/create-place.dto';
import { UpdatePlaceDto } from 'src/shared/dto/group/place/update-place.dto';
import { Place } from 'src/shared/entity/place/place';
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