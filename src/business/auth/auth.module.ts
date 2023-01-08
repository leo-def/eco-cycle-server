import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { jwtConstants } from '../../constants';
import { UserModule } from '../user/user.module';
import { AuthService } from './auth/auth.service';
import { LocalStrategyService } from './local-strategy/local-strategy.service';
import { JwtStrategyService } from './jwt-strategy/jwt-strategy.service';
import { UserInitService } from './user-init/user-init.service';

@Module({
  imports: [
    UserModule, 
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),],
  providers: [
    AuthService,
    LocalStrategyService,
    JwtStrategyService,
    UserInitService
  ],
  exports: [
    AuthService,
    LocalStrategyService,
    JwtStrategyService
  ],
})
export class AuthModule {}
