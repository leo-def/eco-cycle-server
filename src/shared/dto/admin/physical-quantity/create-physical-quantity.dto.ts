import { ApiProperty } from '@nestjs/swagger';
import { AppTitleDto } from '../../shared/app-title.dto';

export class CreatePhysicalQuantityDto extends AppTitleDto {

  @ApiProperty()
  symbol?: string;

}
