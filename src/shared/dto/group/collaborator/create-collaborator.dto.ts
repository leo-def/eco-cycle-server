import { ApiProperty } from '@nestjs/swagger';
import { CollaboratorRoleEnum } from '../../../../enums/Entity/collaborator-role.enum';
import { UserDto } from '../../shared/user.dto';

export class CreateCollaboratorDto {

  @ApiProperty()
  user?: UserDto;

  @ApiProperty()
  role?: CollaboratorRoleEnum;

}
