import { Test, TestingModule } from '@nestjs/testing';
import { PlaceService } from 'src/business/group/place/place.service';
import { ApiGroupPlaceController } from './api-group-place.controller';

describe('ApiGroupPlaceController', () => {
  let controller: ApiGroupPlaceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApiGroupPlaceController],
      providers: [PlaceService],
    }).compile();

    controller = module.get<ApiGroupPlaceController>(ApiGroupPlaceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
