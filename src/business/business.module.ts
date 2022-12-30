import { Module } from '@nestjs/common';
import { CoreModule } from 'src/core/core.module';
import { BusinessService } from './business.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [
    CoreModule,
    AuthModule,
    UserModule,
    SharedModule
  ],
  providers: [BusinessService],
  exports: [BusinessService]
})
export class BusinessModule {}
