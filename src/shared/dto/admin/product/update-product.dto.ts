import { IntersectionType } from '@nestjs/mapped-types';
import { AppEntityDto } from '../../shared/app-entity.dto';
import { CreateProductDto } from './create-product.dto';

export class UpdateProductDto extends IntersectionType(CreateProductDto, AppEntityDto) { }
