import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/shared/entity/user/user';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private repository: Repository<User>,
    ) { }

    async findOne(id: string) {
        return await this.repository.findOneBy({ id } as any);
    }

    
    async findOneByUsername(username: string) {
        return await this.repository.findOneBy({ username } as any);
    }
}
