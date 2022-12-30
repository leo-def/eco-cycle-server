import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../../shared/entity/user/user';
import { AdminModule } from '../admin.module';
import { UserService } from './user.service';

@Module({
    imports: [TypeOrmModule.forFeature([User]), AdminModule],
    providers: [UserService],
    exports: [UserService]
})
export class UserModule {}
