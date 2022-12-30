import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateVehicleDto } from 'src/shared/dto/group/vehicle/create-vehicle.dto';
import { UpdateVehicleDto } from 'src/shared/dto/group/vehicle/update-vehicle.dto';
import { Vehicle } from 'src/shared/entity/vehicle/vehicle';
import { GroupService } from '../group.service';
import { GroupChildService } from '../group-child.service';

@Injectable()
export class VehicleService extends GroupChildService<Vehicle, CreateVehicleDto, UpdateVehicleDto> {

  constructor(
    @InjectRepository(Vehicle)
    private repository: Repository<Vehicle>,
    private groupService: GroupService
  ) {
    super(repository, groupService, 'vehicles')
  }
  getInstance() {
    return new Vehicle();
  }
}
