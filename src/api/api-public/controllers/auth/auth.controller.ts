import { Controller, Request, Post, UseGuards, Get, Body } from '@nestjs/common';
import { RegisterDto } from '../../../../shared/dto/public/auth/register.dto';
import { JwtAuthGuard } from '../../../../api/guards/jwt-auth/jwt-auth.guard';
import { LocalAuthGuard } from '../../../../api/guards/local-auth/local-auth.guard';
import { AuthService } from '../../../../business/auth/auth/auth.service';
import { Public } from '../../../../shared/decorators/public.decorator';
import { ResetPasswordDto } from 'src/shared/dto/public/auth/reset-password.dto';
import { UpdatePasswordDto } from 'src/shared/dto/public/auth/update-password.dto';

@Controller('auth')
export class AuthController {

  constructor(private authService: AuthService) { }

  /*
     $ # POST /auth/login
     $ curl -X POST http://localhost:3000/auth/login -d '{"username": "john", "password": "changeme"}' -H "Content-Type: application/json"
     $ # result -> {"access_token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2Vybm... }
  */
  // @UseGuards(AuthGuard('local'))
  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Post('reset-password')
  async resetPassword(@Body() dto: ResetPasswordDto) {
    return await this.authService.resetPassword(dto);
  }

  @Post('update-password')
  async updatePassword(@Body() dto: UpdatePasswordDto) {
    return await this.authService.updatePassword(dto);
  }

  @Post('register')
  async register(@Body() dto: RegisterDto) {
    return await this.authService.register(dto);
  }

}
