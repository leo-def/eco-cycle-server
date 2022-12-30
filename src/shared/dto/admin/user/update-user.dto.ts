import { IntersectionType } from '@nestjs/mapped-types';
import { AppEntityDto } from '../../shared/app-entity.dto';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends IntersectionType(CreateUserDto, AppEntityDto) { }
