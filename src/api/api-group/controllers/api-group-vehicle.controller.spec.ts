import { Test, TestingModule } from '@nestjs/testing';
import { VehicleService } from 'src/business/group/vehicle/vehicle.service';
import { ApiGroupVehicleController } from './api-group-vehicle.controller';

describe('ApiGroupVehicleController', () => {
  let controller: ApiGroupVehicleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApiGroupVehicleController],
      providers: [VehicleService],
    }).compile();

    controller = module.get<ApiGroupVehicleController>(ApiGroupVehicleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
