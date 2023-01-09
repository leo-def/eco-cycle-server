import { ApiProperty } from '@nestjs/swagger';

export class ResetPasswordDto {
  @ApiProperty()
  username?: string;

  @ApiProperty()
  newPassword?: string;

  @ApiProperty()
  resetPasswordToken?: string;

}
