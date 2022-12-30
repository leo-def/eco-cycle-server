import { IntersectionType, PartialType } from '@nestjs/mapped-types';
import { AppEntityDto } from '../../shared/app-entity.dto';
import { CreatePhysicalQuantityDto } from './create-physical-quantity.dto';

export class UpdatePhysicalQuantityDto extends IntersectionType(CreatePhysicalQuantityDto, AppEntityDto) { }
