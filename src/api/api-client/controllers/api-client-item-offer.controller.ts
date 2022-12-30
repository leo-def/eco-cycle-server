import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ItemOfferService } from 'src/business/client/item-offer/item-offer.service';
import { CreateItemOfferDto } from 'src/shared/dto/client/item-offer/create-item-offer.dto';
import { UpdateItemOfferDto } from 'src/shared/dto/client/item-offer/update-item-offer.dto';
import { FetchParams } from 'src/shared/dto/fetch/fetch-params';

@Controller('item-offer')
export class ApiClientItemOfferController {

  constructor(private readonly service: ItemOfferService) { }

  @Post('search')
  async search(@Body() params: FetchParams) {
    return this.service.search(params);
  }

  @Post()
  async create(@Body() dto: CreateItemOfferDto) {
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
  async update(@Param('id') id: string, @Body() updateItemOfferDto: UpdateItemOfferDto) {
    return this.service.update(id, updateItemOfferDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
