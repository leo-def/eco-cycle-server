import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhysicalQuantity } from 'src/shared/entity/measure/physical-quantity/physical-quantity';
import { AdminModule } from '../admin.module';
import { PhysicalQuantityService } from './physical-quantity.service';

@Module({
    imports: [TypeOrmModule.forFeature([PhysicalQuantity]), AdminModule],
    providers: [PhysicalQuantityService],
    exports: [PhysicalQuantityService]
})
export class PhysicalQuantityModule { }
