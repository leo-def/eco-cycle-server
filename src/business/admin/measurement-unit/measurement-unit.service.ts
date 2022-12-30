import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMeasurementUnitDto } from '../../../shared/dto/admin/measurement-unit/create-measurement-unit.dto';
import { UpdateMeasurementUnitDto } from '../../../shared/dto/admin/measurement-unit/update-measurement-unit.dto';
import { CrudService } from '../../../business/abstracts/crud-service';
import { MeasurementUnit } from '../../../shared/entity/measure/measurement-unit/measurement-unit';

@Injectable()
export class MeasurementUnitService extends CrudService<MeasurementUnit, CreateMeasurementUnitDto, UpdateMeasurementUnitDto> {

  constructor(
    @InjectRepository(MeasurementUnit)
    private repository: Repository<MeasurementUnit>,
  ) {
    super(repository)
  }

  getInstance() {
    return new MeasurementUnit();
  }
}
