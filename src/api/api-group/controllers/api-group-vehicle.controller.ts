import { Controller, Get, Post, Body, Patch, Param, Delete, Res, Put } from '@nestjs/common';
import { Response } from 'express';
import { VehicleService } from '../../../business/group/vehicle/vehicle.service';
import { FetchParams } from '../../../shared/dto/fetch/fetch-params';
import { CreateVehicleDto } from '../../../shared/dto/group/vehicle/create-vehicle.dto';
import { UpdateVehicleDto } from '../../../shared/dto/group/vehicle/update-vehicle.dto';
import { GroupController } from '../abstracts/group.controller';

@Controller('vehicle')
export class ApiGroupVehicleController extends GroupController {

  constructor(private readonly service: VehicleService) { super() }

  @Post('search')
  async search(@Body() params: FetchParams, @Res({ passthrough: true }) response: Response) {
    return this.service.searchByGroup(params, this.getGroupParam(response));
  }


  @Post()
  async create(@Body() dto: CreateVehicleDto, @Res({ passthrough: true }) response: Response) {
    return await this.service.createByGroup(dto, this.getGroupParam(response));
  }

  @Get()
  async findAll(@Res({ passthrough: true }) response: Response) {
    return await this.service.findAllByGroup(this.getGroupParam(response));
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res({ passthrough: true }) response: Response) {
    return await this.service.findOneByGroup(id, this.getGroupParam(response));
  }

  @Put(':id')
  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateVehicleDto, @Res({ passthrough: true }) response: Response) {
    return await this.service.updateByGroup(id, dto, this.getGroupParam(response));
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res({ passthrough: true }) response: Response) {
    return await this.service.removeByGroup(id, this.getGroupParam(response));
  }
}
