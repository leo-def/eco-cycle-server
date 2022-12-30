import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { MeasurementUnitService } from '../../../business/admin/measurement-unit/measurement-unit.service';
import { CreateMeasurementUnitDto } from '../../../shared/dto/admin/measurement-unit/create-measurement-unit.dto';
import { UpdateMeasurementUnitDto } from '../../../shared/dto/admin/measurement-unit/update-measurement-unit.dto';
import { FetchParams } from '../../../shared/dto/fetch/fetch-params';

@Controller('measurement-unit')
export class ApiAdminMeasurementUnitController {

  constructor(private readonly service: MeasurementUnitService) { }

  @Post('search')
  async search(@Body() params: FetchParams) {
    return this.service.search(params);
  }

  @Post()
  async create(@Body() dto: CreateMeasurementUnitDto) {
    return this.service.create(dto);
  }

  @Get()
  async findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Put(':id')
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateMeasurementUnitDto: UpdateMeasurementUnitDto) {
    return this.service.update(id, updateMeasurementUnitDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
