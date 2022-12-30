import { ApiProperty } from '@nestjs/swagger';

export class AppTitleDto {

  @ApiProperty()
  title?: string;

}