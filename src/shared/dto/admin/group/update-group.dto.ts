import { IntersectionType } from '@nestjs/mapped-types';
import { AppEntityDto } from '../../shared/app-entity.dto';
import { CreateGroupDto } from './create-group.dto';

export class UpdateGroupDto extends IntersectionType(CreateGroupDto, AppEntityDto) { }
