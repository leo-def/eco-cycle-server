import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { UserService } from '../../../business/admin/user/user.service';
import { CreateUserDto } from '../../../shared/dto/admin/user/create-user.dto';
import { UpdateUserDto } from '../../../shared/dto/admin/user/update-user.dto';
import { FetchParams } from '../../../shared/dto/fetch/fetch-params';

@Controller('user')
export class ApiAdminUserController {

  constructor(private readonly userService: UserService) { }

  @Post('search')
  async search(@Body() params: FetchParams) {
    return this.userService.search(params);
  }

  @Post()
  async create(@Body() dto: CreateUserDto) {
    return this.userService.create(dto);
  }

  @Get()
  async findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }


  @Put(':id')
  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateUserDto) {
    return this.userService.update(id, dto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
