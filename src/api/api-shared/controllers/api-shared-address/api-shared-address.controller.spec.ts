import { Test, TestingModule } from '@nestjs/testing';
import { ApiSharedAddressController } from './api-shared-address.controller';

describe('ApiSharedAddressController', () => {
  let controller: ApiSharedAddressController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApiSharedAddressController],
    }).compile();

    controller = module.get<ApiSharedAddressController>(ApiSharedAddressController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
