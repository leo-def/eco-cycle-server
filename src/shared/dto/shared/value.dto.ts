import { ApiProperty } from "@nestjs/swagger";
import { AppEntityDto } from "./app-entity.dto";

export class ValueDto extends AppEntityDto {

  @ApiProperty()
  measurementUnitId?: number;

  @ApiProperty()
  value?: number;

}