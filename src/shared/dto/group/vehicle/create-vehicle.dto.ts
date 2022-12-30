import { ApiProperty } from '@nestjs/swagger';
import { VehicleTypeEnum } from '../../../../enums/entity/vehicle-type.enum';

export class CreateVehicleDto {

  @ApiProperty()
  plate?: string;

  @ApiProperty()
  type?: VehicleTypeEnum;

}
