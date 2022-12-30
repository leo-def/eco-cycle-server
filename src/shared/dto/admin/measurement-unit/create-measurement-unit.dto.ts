import { ApiProperty } from '@nestjs/swagger';

export class CreateMeasurementUnitDto {

  @ApiProperty()
  symbol?: string;

  @ApiProperty()
  value?: number;

  @ApiProperty()
  physicalQuantitySymbol?: string;

}
