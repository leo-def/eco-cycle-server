import { Test, TestingModule } from '@nestjs/testing';
import { GroupService } from 'src/business/admin/group/group.service';
import { ApiAdminGroupController } from './api-admin-group.controller';

describe('ApiAdminGroupController', () => {
  let controller: ApiAdminGroupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApiAdminGroupController],
      providers: [GroupService],
    }).compile();

    controller = module.get<ApiAdminGroupController>(ApiAdminGroupController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
