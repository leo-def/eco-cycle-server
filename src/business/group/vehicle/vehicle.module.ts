import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vehicle } from '../../../shared/entity/vehicle/vehicle';
import { GroupModule } from '../group.module';
import { VehicleService } from './vehicle.service';


@Module({
    imports: [TypeOrmModule.forFeature([Vehicle]), GroupModule],
    providers: [VehicleService],
    exports: [VehicleService]
})
export class VehicleModule {}
