import { Test, TestingModule } from '@nestjs/testing';
import { PhysicalQuantityService } from './physical-quantity.service';

describe('PhysicalQuantityService', () => {
  let service: PhysicalQuantityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PhysicalQuantityService],
    }).compile();

    service = module.get<PhysicalQuantityService>(PhysicalQuantityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
