import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemOffer } from '../../../shared/entity/item-offer/item-offer';
import { GroupModule } from '../group.module';
import { ItemOfferService } from './item-offer.service';

@Module({
    imports: [TypeOrmModule.forFeature([ItemOffer]), GroupModule],
    providers: [ItemOfferService],
    exports: [ItemOfferService]
})
export class ItemOfferModule {}
