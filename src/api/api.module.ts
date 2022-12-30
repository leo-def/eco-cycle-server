import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { BusinessModule } from '../business/business.module';

@Module({
  imports: [
    BusinessModule
  ],
  controllers: [ApiController],
  /*
  // register the JwtAuthGuard as a global guard using the following construction (in any module):
    providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
  */
})
export class ApiModule { }
