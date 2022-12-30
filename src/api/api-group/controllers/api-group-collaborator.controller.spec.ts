import { Test, TestingModule } from '@nestjs/testing';
import { CollaboratorService } from 'src/business/group/collaborator/collaborator.service';
import { ApiGroupCollaboratorController } from './api-group-collaborator.controller';

describe('ApiGroupCollaboratorController', () => {
  let controller: ApiGroupCollaboratorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApiGroupCollaboratorController],
      providers: [CollaboratorService],
    }).compile();

    controller = module.get<ApiGroupCollaboratorController>(ApiGroupCollaboratorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
