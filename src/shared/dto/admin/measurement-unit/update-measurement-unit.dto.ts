import { IntersectionType } from '@nestjs/mapped-types';
import { AppEntityDto } from '../../shared/app-entity.dto';
import { CreateMeasurementUnitDto } from './create-measurement-unit.dto';

export class UpdateMeasurementUnitDto extends IntersectionType(CreateMeasurementUnitDto, AppEntityDto)  {}
