import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../../../business/user/user/user.service';

@Injectable()
export class AuthService {
  
  constructor(
    private usersService: UserService,
    private jwtService: JwtService) { }

  async validateUser(username: string, pass: string): Promise<any> {
    
    const user = await this.usersService.findOneByUsername(username);
    if (user && user.password && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

}
