import { ApiProperty } from "@nestjs/swagger";
import { UserTypeEnum } from "src/enums/Entity/user-type.enum";
import { ProfileDto } from "../../shared/profile.dto";

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
