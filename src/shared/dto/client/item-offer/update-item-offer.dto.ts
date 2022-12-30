import { IntersectionType } from '@nestjs/mapped-types';
import { AppEntityDto } from '../../shared/app-entity.dto';
import { CreateItemOfferDto } from './create-item-offer.dto';

export class UpdateItemOfferDto extends IntersectionType(CreateItemOfferDto, AppEntityDto) { }

