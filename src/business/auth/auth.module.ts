import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { jwtConstants } from '../../constants';
import { UserModule } from '../user/user.module';
import { AuthService } from './auth/auth.service';
import { LocalStrategy } from './local-strategy/local-strategy';
import { JwtStrategyService } from './jwt-strategy/jwt-strategy.service';

@Module({
  imports: [
    UserModule, 
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),],
  providers: [AuthService, LocalStrategy, JwtStrategyService],
  exports: [AuthService, LocalStrategy, JwtStrategyService],
})
export class AuthModule {}
