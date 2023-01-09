import { ApiProperty } from '@nestjs/swagger';

export class UpdatePasswordDto {
  @ApiProperty()
  username?: string;

  @ApiProperty()
  newPassword?: string;

  @ApiProperty()
  oldPassword?: string;

}
