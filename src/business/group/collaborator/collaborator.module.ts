import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Collaborator } from '../../../shared/entity/collaborator/collaborator';
import { GroupModule } from '../group.module';
import { CollaboratorService } from './collaborator.service';

@Module({
    imports: [TypeOrmModule.forFeature([Collaborator]), GroupModule],
    providers: [CollaboratorService],
    exports: [CollaboratorService]
})
export class CollaboratorModule {}
