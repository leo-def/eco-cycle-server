import { ApiProperty } from '@nestjs/swagger';
import { UserTypeEnum } from '../../../../enums/entity/user-type.enum';
import { ProfileDto } from '../../shared/profile.dto';

export class CreateUserDto {

  @ApiProperty()
  username?: string;
  
  @ApiProperty()
  password?: string;
  
  @ApiProperty()
  type?: UserTypeEnum;
  
  @ApiProperty()
  profile?: ProfileDto;

}
