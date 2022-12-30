import { Controller, Get, Post, Body, Patch, Param, Delete, Res, Put } from '@nestjs/common';
import { Response } from 'express';
import { CollaboratorService } from '../../../business/group/collaborator/collaborator.service';
import { FetchParams } from '../../../shared/dto/fetch/fetch-params';
import { CreateCollaboratorDto } from '../../../shared/dto/group/collaborator/create-collaborator.dto';
import { UpdateCollaboratorDto } from '../../../shared/dto/group/collaborator/update-collaborator.dto';
import { GroupController } from '../abstracts/group.controller';

@Controller('collaborator')
export class ApiGroupCollaboratorController extends GroupController {

  constructor(private readonly service: CollaboratorService) { super() }

  @Post('search')
  async search(@Body() params: FetchParams, @Res({ passthrough: true }) response: Response) {
    return this.service.searchByGroup(params, this.getGroupParam(response));
  }

  @Post()
  async create(@Body() dto: CreateCollaboratorDto, @Res({ passthrough: true }) response: Response) {
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
  async update(@Param('id') id: string, @Body() dto: UpdateCollaboratorDto, @Res({ passthrough: true }) response: Response) {
    return await this.service.updateByGroup(id, dto, this.getGroupParam(response));
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res({ passthrough: true }) response: Response) {
    return await this.service.removeByGroup(id, this.getGroupParam(response));
  }
}
