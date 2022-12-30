import { Test, TestingModule } from '@nestjs/testing';
import { ProductService } from 'src/business/admin/product/product.service';
import { ApiAdminProductController } from './api-admin-product.controller';

describe('ApiAdminProductController', () => {
  let controller: ApiAdminProductController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApiAdminProductController],
      providers: [ProductService],
    }).compile();

    controller = module.get<ApiAdminProductController>(ApiAdminProductController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
