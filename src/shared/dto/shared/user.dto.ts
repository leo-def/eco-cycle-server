import { ApiProperty } from '@nestjs/swagger';
import { UserTypeEnum } from '../../../enums/Entity/user-type.enum';
import { AppEntityDto } from './app-entity.dto';
import { ProfileDto } from './profile.dto';

export class UserDto extends AppEntityDto {

  @ApiProperty()
  username?: string;

  @ApiProperty()
  password?: string;

  @ApiProperty()
  type?: UserTypeEnum;

  @ApiProperty()
  profile?: ProfileDto;

}
