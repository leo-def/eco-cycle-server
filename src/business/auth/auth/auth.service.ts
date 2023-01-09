import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginResponseDto } from 'src/shared/dto/public/auth/login-response-dto';
import { RegisterDto } from 'src/shared/dto/public/auth/register.dto';
import { ResetPasswordDto } from 'src/shared/dto/public/auth/reset-password.dto';
import { UpdatePasswordDto } from 'src/shared/dto/public/auth/update-password.dto';
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
      if (!salt) {
        return password && comparePasword === password;
      }
      const isValid = PasswordUtils.validPassword(password, comparePasword, salt);
      return (isValid ? result : null);
    }
    return null;
  }

  async login(user: any): Promise<LoginResponseDto> {
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    } as LoginResponseDto;
  }

  async resetPassword(dto: ResetPasswordDto) {
    const { username, newPassword, resetPasswordToken } = dto;
    const user = await this.userService.findOneByUsername(username);
    if (user && user.password && newPassword && resetPasswordToken && user.resetPasswordToken) {
      await this.userService.updatePassword(user, newPassword);
    }
  }

  async updatePassword(dto: UpdatePasswordDto) {
    const { username, newPassword, oldPassword } = dto;
    const user = await this.userService.findOneByUsername(username);
    if (user && newPassword && oldPassword && PasswordUtils.validPassword(user.password, oldPassword, user.salt)) {
      await this.userService.updatePassword(user, newPassword);
    }
  }

  async register(registerDto: RegisterDto) {
    const user = new User();
    Object.assign(user, registerDto);
    return await this.userService.register(user);
  }
}
