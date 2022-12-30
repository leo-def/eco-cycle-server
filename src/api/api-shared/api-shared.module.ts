import { Module } from '@nestjs/common';
import { AddressModule } from '../../business/shared/address/address.module';
import { ApiSharedAddressController } from './controllers/api-shared-address/api-shared-address.controller';

@Module({
  controllers: [ApiSharedAddressController],
  imports: [AddressModule]
})
export class ApiSharedModule {}
