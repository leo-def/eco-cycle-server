import { ApiProperty } from '@nestjs/swagger';
import { ActivityTypeEnum } from '../../../../enums/entity/activity-type.enum';
import { ProfileDto } from '../../shared/profile.dto';
import { UserDto } from '../../shared/user.dto';

export class CreateGroupDto {

  @ApiProperty()
  type?: ActivityTypeEnum;

  @ApiProperty()
  profile?: ProfileDto;

  @ApiProperty()
  owner?: UserDto;

}
