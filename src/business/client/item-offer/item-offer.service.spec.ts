import { Test, TestingModule } from '@nestjs/testing';
import { ItemOfferService } from './item-offer.service';

describe('ItemOfferService', () => {
  let service: ItemOfferService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ItemOfferService],
    }).compile();

    service = module.get<ItemOfferService>(ItemOfferService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
