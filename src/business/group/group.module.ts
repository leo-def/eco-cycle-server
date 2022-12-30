import { Module } from '@nestjs/common';
import { BusinessModule } from '../business.module';
import { GroupService } from './group.service';
import { CollaboratorModule } from './collaborator/collaborator.module';
import { PlaceModule } from './place/place.module';
import { VehicleModule } from './vehicle/vehicle.module';
import { Group } from 'src/shared/entity/group/group';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Group])],
    providers: [GroupService],
    exports: [GroupService]
  })
export class GroupModule {}
