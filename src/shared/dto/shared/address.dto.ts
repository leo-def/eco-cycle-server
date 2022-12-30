import { ApiProperty } from '@nestjs/swagger';
import { AppEntityDto } from './app-entity.dto';

export class AddressDto extends AppEntityDto {

  @ApiProperty()
  cep?: string;

  @ApiProperty()
  street?: string;

  @ApiProperty()
  number?: string;

  @ApiProperty()
  city?: string;

  @ApiProperty()
  country?: string;

  @ApiProperty()
  state?: string;

  @ApiProperty()
  neighborhood?: string;

  @ApiProperty()
  complement?: string;

}