import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ProductService } from '../../../business/admin/product/product.service';
import { CreateProductDto } from '../../../shared/dto/admin/product/create-product.dto';
import { UpdateProductDto } from '../../../shared/dto/admin/product/update-product.dto';
import { FetchParams } from '../../../shared/dto/fetch/fetch-params';

@Controller('product')
export class ApiAdminProductController {

  constructor(private readonly service: ProductService) { }

  @Post('search')
  async search(@Body() params: FetchParams) {
    return this.service.search(params);
  }

  @Post()
  async create(@Body() dto: CreateProductDto) {
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
  async update(@Param('id') id: string, @Body() dto: UpdateProductDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
