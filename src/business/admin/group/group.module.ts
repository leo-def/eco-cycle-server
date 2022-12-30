import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Group } from 'src/shared/entity/group/group';
import { AdminModule } from '../admin.module';
import { GroupService } from './group.service';

@Module({
    imports: [TypeOrmModule.forFeature([Group]), AdminModule],
    providers: [GroupService],
    exports: [GroupService]
})
export class GroupModule {}
