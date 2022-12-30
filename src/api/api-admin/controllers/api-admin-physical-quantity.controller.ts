import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { PhysicalQuantityService } from 'src/business/admin/physical-quantity/physical-quantity.service';
import { CreatePhysicalQuantityDto } from 'src/shared/dto/admin/physical-quantity/create-physical-quantity.dto';
import { UpdatePhysicalQuantityDto } from 'src/shared/dto/admin/physical-quantity/update-physical-quantity.dto';
import { FetchParams } from 'src/shared/dto/fetch/fetch-params';

@Controller('physical-quantity')
export class ApiAdminPhysicalQuantityController {

  constructor(private readonly service: PhysicalQuantityService) { }

  @Post('search')
  async search(@Body() params: FetchParams) {
    return this.service.search(params);
  }

  @Post()
  async create(@Body() dto: CreatePhysicalQuantityDto) {
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
  async update(@Param('id') id: string, @Body() updatePhysicalQuantityDto: UpdatePhysicalQuantityDto) {
    return this.service.update(id, updatePhysicalQuantityDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
