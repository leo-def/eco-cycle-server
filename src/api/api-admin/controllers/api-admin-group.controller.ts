import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { GroupService } from 'src/business/admin/group/group.service';
import { CreateGroupDto } from 'src/shared/dto/admin/group/create-group.dto';
import { UpdateGroupDto } from 'src/shared/dto/admin/group/update-group.dto';
import { FetchParams } from 'src/shared/dto/fetch/fetch-params';

@Controller('group')
export class ApiAdminGroupController {

  constructor(private readonly service: GroupService) { }

  @Post('search')
  async search(@Body() params: FetchParams) {
    return this.service.search(params);
  }

  @Post()
  async create(@Body() dto: CreateGroupDto) {
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
  async update(@Param('id') id: string, @Body() updateGroupDto: UpdateGroupDto) {
    return this.service.update(id, updateGroupDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
