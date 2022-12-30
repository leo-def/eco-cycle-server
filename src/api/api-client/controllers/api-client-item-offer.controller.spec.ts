import { Test, TestingModule } from '@nestjs/testing';
import { ItemOfferService } from 'src/business/client/item-offer/item-offer.service';
import { ApiClientItemOfferController } from './api-client-item-offer.controller';

describe('ApiClientItemOfferController', () => {
  let controller: ApiClientItemOfferController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApiClientItemOfferController],
      providers: [ItemOfferService],
    }).compile();

    controller = module.get<ApiClientItemOfferController>(ApiClientItemOfferController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
