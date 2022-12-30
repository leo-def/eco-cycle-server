import { ApiProperty } from '@nestjs/swagger';
import { ItemOfferTypeEnum } from '../../../../enums/entity/item-offer-type.enum';
import { ProductItemDto } from '../../shared/product-item.dto';

export class CreateItemOfferDto {

  @ApiProperty()
  item?: ProductItemDto;

  @ApiProperty()
  placeId?: number;

  @ApiProperty()
  type?: ItemOfferTypeEnum;

  @ApiProperty()
  groupId?: number;
}
