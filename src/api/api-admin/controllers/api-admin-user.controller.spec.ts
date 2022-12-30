import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from 'src/business/admin/user/user.service';
import { ApiAdminUserController } from './api-admin-user.controller';
describe('ApiAdminUserController', () => {
  let controller: ApiAdminUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApiAdminUserController],
      providers: [UserService],
    }).compile();

    controller = module.get<ApiAdminUserController>(ApiAdminUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
