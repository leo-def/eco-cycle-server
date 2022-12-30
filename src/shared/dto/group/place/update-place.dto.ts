import { IntersectionType, PartialType } from '@nestjs/mapped-types';
import { AppEntityDto } from '../../shared/app-entity.dto';
import { CreatePlaceDto } from './create-place.dto';

export class UpdatePlaceDto extends IntersectionType(CreatePlaceDto, AppEntityDto) { }

