import { ApiProperty } from '@nestjs/swagger';
import { ActivityTypeEnum } from '../../../../enums/Entity/activity-type.enum';
import { AddressDto } from '../../shared/address.dto';

export class CreatePlaceDto {

  @ApiProperty()
  address?: AddressDto;

  @ApiProperty()
  type?: ActivityTypeEnum;

}
