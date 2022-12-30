import { ApiProperty } from "@nestjs/swagger";
import { VehicleTypeEnum } from "src/enums/Entity/vehicle-type.enum";

export class CreateVehicleDto {

  @ApiProperty()
  plate?: string;

  @ApiProperty()
  type?: VehicleTypeEnum;

}
