import { Controller, Get, Post, Body, Patch, Param, Delete, Res, Put } from '@nestjs/common';
import { Response } from 'express';
import { ItemOfferService } from '../../../business/group/item-offer/item-offer.service';
import { FetchParams } from '../../../shared/dto/fetch/fetch-params';
import { CreateItemOfferDto } from '../../../shared/dto/group/item-offer/create-item-offer.dto';
import { UpdateItemOfferDto } from '../../../shared/dto/group/item-offer/update-item-offer.dto';
import { GroupController } from '../abstracts/group.controller';

@Controller('item-offer')
export class ApiGroupItemOfferController extends GroupController {

  constructor(private readonly service: ItemOfferService) { super() }

  @Post('search')
  async search(@Body() params: FetchParams, @Res({ passthrough: true }) response: Response) {
    return this.service.searchByGroup(params, this.getGroupParam(response));
  }


  @Post()
  async create(@Body() dto: CreateItemOfferDto, @Res({ passthrough: true }) response: Response) {
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
  async update(@Param('id') id: string, @Body() dto: UpdateItemOfferDto, @Res({ passthrough: true }) response: Response) {
    return await this.service.updateByGroup(id, dto, this.getGroupParam(response));
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res({ passthrough: true }) response: Response) {
    return await this.service.removeByGroup(id, this.getGroupParam(response));
  }
}
