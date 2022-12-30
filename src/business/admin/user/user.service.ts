import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../../../shared/dto/admin/user/create-user.dto';
import { UpdateUserDto } from '../../../shared/dto/admin/user/update-user.dto';
import { User } from '../../../shared/entity/user/user';
import { CrudService } from '../../../business/abstracts/crud-service';

@Injectable()
export class UserService extends CrudService<User, CreateUserDto, UpdateUserDto> {

  constructor(
    @InjectRepository(User)
    private repository: Repository<User>,
  ) {
    super(repository)
  }

  getInstance() {
    return new User();
  }
}

