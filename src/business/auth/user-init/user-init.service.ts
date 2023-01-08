import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UserService } from 'src/business/user/user/user.service';
import { UserTypeEnum } from 'src/enums/entity/user-type.enum';
import { EnvVarsEnum } from 'src/enums/env-vars.enum';
import { Profile } from 'src/shared/entity/profile/profile';
import { User } from 'src/shared/entity/user/user';

@Injectable()
export class UserInitService implements OnApplicationBootstrap {

  constructor(
    private userService: UserService,
    private config: ConfigService) { }

  async onApplicationBootstrap() {
    const username = this.config.get(EnvVarsEnum.MAIN_ADMIN_USERNAME);
    const user = await this.userService.findOneByUsername(username);
    if(!user) {
      const mainUser = this.createMainUser();
      return await this.userService.register(mainUser);
    }
  }

  private createMainUser() {
    const username = this.config.get(EnvVarsEnum.MAIN_ADMIN_USERNAME);
    const password = this.config.get(EnvVarsEnum.MAIN_ADMIN_PASSWORD);
    const name = this.config.get(EnvVarsEnum.MAIN_ADMIN_NAME);
    const profile = name ? { name } as Profile : null;
    const type = UserTypeEnum.admin
    const user = new User();
    Object.assign(user, { password, profile, username, type });
    return user;
  }
}
