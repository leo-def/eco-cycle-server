import { Module } from '@nestjs/common';
import { CepModule } from 'src/business/external/cep/cep.module';
import { AddressService } from './address.service';

@Module({
  imports: [CepModule],
  providers: [AddressService],
  exports: [AddressService]
})
export class AddressModule {
}
