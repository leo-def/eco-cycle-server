import { Controller, Request, Post, UseGuards, Get, Body } from '@nestjs/common';
import { RegisterDto } from '../../../../shared/dto/public/auth/register.dto';
import { JwtAuthGuard } from '../../../../api/guards/jwt-auth/jwt-auth.guard';
import { LocalAuthGuard } from '../../../../api/guards/local-auth/local-auth.guard';
import { AuthService } from '../../../../business/auth/auth/auth.service';
import { Public } from '../../../../shared/decorators/public.decorator';

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

  /*
    $ # GET /profile
    $ curl http://localhost:3000/profile
    $ # result -> {"statusCode":401,"message":"Unauthorized"}

    $ # GET /profile using access_token returned from previous step as bearer code
    $ curl http://localhost:3000/profile -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2Vybm..."
    $ # result -> {"userId":1,"username":"john"}
  */
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Post('register')
  register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }
}
