import { Test, TestingModule } from '@nestjs/testing';
import { MeasurementUnitService } from 'src/business/admin/measurement-unit/measurement-unit.service';
import { ApiAdminMeasurementUnitController } from './api-admin-measurement-unit.controller';

describe('ApiAdminMeasurementUnitController', () => {
  let controller: ApiAdminMeasurementUnitController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApiAdminMeasurementUnitController],
      providers: [MeasurementUnitService],
    }).compile();

    controller = module.get<ApiAdminMeasurementUnitController>(ApiAdminMeasurementUnitController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
