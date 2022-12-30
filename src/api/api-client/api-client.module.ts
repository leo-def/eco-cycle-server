import { Module } from '@nestjs/common';
import { ClientModule } from '../../business/client/client.module';
import { ItemOfferModule } from '../../business/client/item-offer/item-offer.module';
import { ApiClientItemOfferController } from './controllers/api-client-item-offer.controller';
import { ApiClientController } from './controllers/api-client.controller';

@Module({
  controllers: [
    ApiClientController,
    ApiClientItemOfferController,
  ],
  imports: [
    ClientModule,
    ItemOfferModule
  ]
})
export class ApiClientModule { }
