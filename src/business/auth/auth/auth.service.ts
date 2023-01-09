import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from 'src/shared/dto/public/auth/register.dto';
import { User } from 'src/shared/entity/user/user';
import { PasswordUtils } from 'src/utils/password-utils';
import { UserService } from '../../../business/user/user/user.service';

@Injectable()
export class AuthService {

  constructor(
    private userService: UserService,
    private jwtService: JwtService) { }

  async validateUser(username: string, comparePasword: string): Promise<any> {
    const user = await this.userService.findOneByUsername(username);
    if (user && user.password && comparePasword) {
      const { password, salt, ...result } = user;
      if(!salt) {
        return password && comparePasword === password;
      }
      const isValid = PasswordUtils.validPassword(password, comparePasword, salt);
      return (isValid ? result : null);
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
  }

  async updatePassword(dto: UpdatePasswordDto) {
    const { username, newPassword, oldPassword } = dto;
    const user = await this.userService.findOneByUsername(username);
    if (user && newPassword && oldPassword && PasswordUtils.validPassword(user.password, oldPassword, user.salt)) {
      await this.userService.updatePassword(user, newPassword);
    }
  }

  async register(registerDto: RegisterDto) {
    return this.userService.register({ ...registerDto } as User);
  }
}
