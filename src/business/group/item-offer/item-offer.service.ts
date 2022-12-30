import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateItemOfferDto } from 'src/shared/dto/group/item-offer/create-item-offer.dto';
import { UpdateItemOfferDto } from 'src/shared/dto/group/item-offer/update-item-offer.dto';
import { ItemOffer } from 'src/shared/entity/item-offer/item-offer';
import { GroupService } from '../group.service';
import { GroupChildService } from '../group-child.service';

@Injectable()
export class ItemOfferService extends GroupChildService<ItemOffer, CreateItemOfferDto, UpdateItemOfferDto> {

  constructor(
    @InjectRepository(ItemOffer)
    private repository: Repository<ItemOffer>,
    private groupService: GroupService
  ) {
    super(repository, groupService, 'item-offer')
  }
  getInstance() {
    return new ItemOffer();
  }
}
