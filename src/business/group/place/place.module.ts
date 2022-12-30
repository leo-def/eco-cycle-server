import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Place } from 'src/shared/entity/place/place';
import { GroupModule } from '../group.module';
import { PlaceService } from './place.service';

@Module({
    imports: [TypeOrmModule.forFeature([Place]), GroupModule],
    providers: [PlaceService],
    exports: [PlaceService]
})
export class PlaceModule {}
