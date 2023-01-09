import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../../shared/entity/user/user';
import { Repository } from 'typeorm';
import { PasswordUtils } from 'src/utils/password-utils';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private repository: Repository<User>,
  ) { }

  async findOne(id: string): Promise<User> {
    return await this.repository.findOneBy({ id } as any);
  }

  async findOneByUsername(username: string): Promise<User> {
    return await this.repository.findOneBy({ username } as any);
  }

  async register(register: User): Promise<User> {
    const { salt, hash } = PasswordUtils.loadPassword(register.password);
    register.password = hash;
    register.salt = salt;
    return await this.repository.save(register);
  }
  
  async updatePassword(user: User, newPassword: string) {
    const { salt, hash } = PasswordUtils.loadPassword(newPassword, user.salt);
    user.password = hash;
    user.salt = salt;
    return await this.repository.update(user.id, user);
  }

}
