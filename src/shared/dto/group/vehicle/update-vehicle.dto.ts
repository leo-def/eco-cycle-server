import { IntersectionType } from '@nestjs/mapped-types';
import { AppEntityDto } from '../../shared/app-entity.dto';
import { CreateVehicleDto } from './create-vehicle.dto';

export class UpdateVehicleDto extends IntersectionType(CreateVehicleDto, AppEntityDto) { }
