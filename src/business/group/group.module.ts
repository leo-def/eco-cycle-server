import { Module } from '@nestjs/common';
import { GroupService } from './group.service';
import { Group } from '../../shared/entity/group/group';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Group])],
    providers: [GroupService],
    exports: [GroupService]
  })
export class GroupModule {}
