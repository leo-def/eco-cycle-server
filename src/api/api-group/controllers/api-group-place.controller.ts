import { Controller, Get, Post, Body, Patch, Param, Delete, Res, Put } from '@nestjs/common';
import { Response } from 'express';
import { PlaceService } from 'src/business/group/place/place.service';
import { FetchParams } from 'src/shared/dto/fetch/fetch-params';
import { CreatePlaceDto } from 'src/shared/dto/group/place/create-place.dto';
import { UpdatePlaceDto } from 'src/shared/dto/group/place/update-place.dto';
import { GroupController } from '../abstracts/group.controller';

@Controller('place')
export class ApiGroupPlaceController extends GroupController {

  constructor(private readonly service: PlaceService) { super() }

  @Post('search')
  async search(@Body() params: FetchParams, @Res({ passthrough: true }) response: Response) {
    return this.service.searchByGroup(params, this.getGroupParam(response));
  }


  @Post()
  async create(@Body() dto: CreatePlaceDto, @Res({ passthrough: true }) response: Response) {
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
  async update(@Param('id') id: string, @Body() dto: UpdatePlaceDto, @Res({ passthrough: true }) response: Response) {
    return await this.service.updateByGroup(id, dto, this.getGroupParam(response));
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res({ passthrough: true }) response: Response) {
    return await this.service.removeByGroup(id, this.getGroupParam(response));
  }
}
