import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { map } from 'rxjs';
import { CepService } from 'src/business/external/cep/cep.service';
import { AddressResponse } from 'src/business/external/cep/shared/address-response';
import { Address } from 'src/shared/entity/address/address';

@Injectable()
export class AddressService {
  constructor(private readonly cepService: CepService) { }

  searchAddressByCode(cep: string) {
    return this.cepService.searchAddressByCode(cep).pipe(
      map((response: AxiosResponse<AddressResponse>) => this.mapAddressResponsetoAddress(response.data))
    );
  }

  mapAddressResponsetoAddress(addressResponse: AddressResponse): Address {
    const cepCountry = 'Brasil';
    const address = new Address()
    address.cep = addressResponse.cep;
    address.street = addressResponse.logradouro;
    address.city = addressResponse.localidade;
    address.country = cepCountry;
    address.state = addressResponse.uf;
    address.neighborhood = addressResponse.bairro;
    return address;
  }

}
