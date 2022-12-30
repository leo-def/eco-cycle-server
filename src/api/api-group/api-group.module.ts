import { MiddlewareConsumer, Module } from '@nestjs/common';
import { CollaboratorModule } from '../../business/group/collaborator/collaborator.module';
import { GroupModule } from '../../business/group/group.module';
import { ItemOfferModule } from '../../business/group/item-offer/item-offer.module';
import { PlaceModule } from '../../business/group/place/place.module';
import { VehicleModule } from '../../business/group/vehicle/vehicle.module';
import { ApiGroupCollaboratorController } from './controllers/api-group-collaborator.controller';
import { ApiGroupItemOfferController } from './controllers/api-group-item-offer.controller';
import { ApiGroupPlaceController } from './controllers/api-group-place.controller';
import { ApiGroupVehicleController } from './controllers/api-group-vehicle.controller';
import { ApiGroupController } from './controllers/api-group.controller';
import { GroupMiddleware } from './middlewares/group.middleware';

@Module({
  controllers: [
    ApiGroupController,
    ApiGroupCollaboratorController,
    ApiGroupItemOfferController,
    ApiGroupPlaceController,
    ApiGroupVehicleController
  ],
  imports: [
    GroupModule,
    CollaboratorModule,
    ItemOfferModule,
    PlaceModule,
    VehicleModule
  ]
})
export class ApiGroupModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(GroupMiddleware)
      .forRoutes('api/group/:group/*');
  }
}
