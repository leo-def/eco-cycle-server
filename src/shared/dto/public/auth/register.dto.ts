import { ApiProperty } from '@nestjs/swagger';
import { UserTypeEnum } from 'src/enums/entity/user-type.enum';
import { ProfileDto } from './profile.dto';

export class RegisterDto {

  @ApiProperty()
  username?: string;
  
  @ApiProperty()
  password?: string;
  
  @ApiProperty()
  type?: UserTypeEnum;
  
  @ApiProperty()
  profile?: ProfileDto;

}
