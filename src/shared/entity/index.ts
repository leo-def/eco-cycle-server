import { Address } from './address/address';
import { Collaborator } from './collaborator/collaborator';
import { PixFinancialReceiptData } from './financial-receipt-data/pix-financial-receipt-data/pix-financial-receipt-data';
import { TedFinancialReceiptData } from './financial-receipt-data/ted-financial-receipt-data/ted-financial-receipt-data';
import { Group } from './group/group';
import { ItemOffer } from './item-offer/item-offer';
import { MeasurementUnit } from './measure/measurement-unit/measurement-unit';
import { PhysicalQuantity } from './measure/physical-quantity/physical-quantity';
import { Value } from './measure/value';
import { Media } from './media/media';
import { Place } from './place/place';
import { Product } from './product/product';
import { ProductItem } from './product-item/product-item';
import { Profile } from './profile/profile';
import { User } from './user/user';
import { Vehicle } from './vehicle/vehicle';

export const entities = [
    Address,
    Collaborator,
    PixFinancialReceiptData,
    TedFinancialReceiptData,
    Group,
    ItemOffer,
    MeasurementUnit,
    PhysicalQuantity,
    Value,
    Media,
    Place,
    Product,
    ProductItem,
    Profile,
    User,
    Vehicle
]