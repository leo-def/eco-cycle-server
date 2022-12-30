import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateItemOfferDto } from '../../../shared/dto/client/item-offer/create-item-offer.dto';
import { UpdateItemOfferDto } from '../../../shared/dto/client/item-offer/update-item-offer.dto';
import { ItemOffer } from '../../../shared/entity/item-offer/item-offer';
import { CrudService } from '../../../business/abstracts/crud-service';

@Injectable()
export class ItemOfferService extends CrudService<ItemOffer, CreateItemOfferDto, UpdateItemOfferDto> {

  constructor(
    @InjectRepository(ItemOffer)
    private repository: Repository<ItemOffer>,
  ) {
    super(repository)
  }

  getInstance() {
    return new ItemOffer();
  }
}
