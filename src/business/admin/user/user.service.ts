import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from 'src/shared/dto/admin/user/create-user.dto';
import { UpdateUserDto } from 'src/shared/dto/admin/user/update-user.dto';
import { User } from 'src/shared/entity/user/user';
import { CrudService } from 'src/business/abstracts/crud-service';

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

