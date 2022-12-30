import { Module } from '@nestjs/common';
import { BusinessModule } from '../business.module';
import { AdminService } from './admin.service';

@Module({
    imports: [BusinessModule],
    providers: [AdminService],
    exports: [AdminService]
  })
export class AdminModule {}
