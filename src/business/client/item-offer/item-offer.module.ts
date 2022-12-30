import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemOffer } from '../../../shared/entity/item-offer/item-offer';
import { ClientModule } from '../client.module';
import { ItemOfferService } from './item-offer.service';

@Module({
    imports: [TypeOrmModule.forFeature([ItemOffer]), ClientModule],
    providers: [ItemOfferService],
    exports: [ItemOfferService]
})
export class ItemOfferModule {}
