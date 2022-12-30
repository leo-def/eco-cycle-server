import { Test, TestingModule } from '@nestjs/testing';
import { PhysicalQuantityService } from 'src/business/admin/physical-quantity/physical-quantity.service';
import { ApiAdminPhysicalQuantityController } from './api-admin-physical-quantity.controller';

describe('ApiAdminPhysicalQuantityController', () => {
  let controller: ApiAdminPhysicalQuantityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApiAdminPhysicalQuantityController],
      providers: [PhysicalQuantityService],
    }).compile();

    controller = module.get<ApiAdminPhysicalQuantityController>(ApiAdminPhysicalQuantityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
