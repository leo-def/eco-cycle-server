import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MeasurementUnit } from '../../../shared/entity/measure/measurement-unit/measurement-unit';
import { AdminModule } from '../admin.module';
import { MeasurementUnitService } from './measurement-unit.service';

@Module({
    imports: [TypeOrmModule.forFeature([MeasurementUnit]), AdminModule],
    providers: [MeasurementUnitService],
    exports: [MeasurementUnitService]
})
export class MeasurementUnitModule { }
