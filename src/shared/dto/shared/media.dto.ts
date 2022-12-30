import { ApiProperty } from '@nestjs/swagger';
import { AppEntityDto } from './app-entity.dto';

export class MediaDto extends AppEntityDto {

  @ApiProperty()
  alt?: string;

  @ApiProperty()
  type?: string;

  @ApiProperty()
  mediaType?: string;

  @ApiProperty()
  src?: string;

}