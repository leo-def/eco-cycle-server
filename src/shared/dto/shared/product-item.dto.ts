import { ApiProperty } from "@nestjs/swagger";
import { AppEntityDto } from "./app-entity.dto";
import { MediaDto } from "./media.dto";
import { ValueDto } from "./value.dto";

export class ProductItemDto extends AppEntityDto {

  @ApiProperty()
  productId?: number;

  @ApiProperty()
  media?: Array<MediaDto>;

  @ApiProperty()
  value?: ValueDto;

  @ApiProperty()
  financialValue?: ValueDto;

}
