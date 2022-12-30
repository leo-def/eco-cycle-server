import { Module } from '@nestjs/common';
import { BusinessModule } from '../business.module';
import { ClientService } from './client.service';

@Module({
    imports: [BusinessModule],
    providers: [ClientService],
    exports: [ClientService]
  })
export class ClientModule {}
