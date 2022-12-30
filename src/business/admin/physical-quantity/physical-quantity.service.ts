import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePhysicalQuantityDto } from 'src/shared/dto/admin/physical-quantity/create-physical-quantity.dto';
import { UpdatePhysicalQuantityDto } from 'src/shared/dto/admin/physical-quantity/update-physical-quantity.dto';
import { CrudService } from 'src/business/abstracts/crud-service';
import { PhysicalQuantity } from 'src/shared/entity/measure/physical-quantity/physical-quantity';

@Injectable()
export class PhysicalQuantityService extends CrudService<PhysicalQuantity, CreatePhysicalQuantityDto, UpdatePhysicalQuantityDto> {

  constructor(
    @InjectRepository(PhysicalQuantity)
    private repository: Repository<PhysicalQuantity>,
  ) {
    super(repository)
  }

  getInstance() {
    return new PhysicalQuantity();
  }
}
