import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AddressResponse } from './shared/address-response';

@Injectable()
export class CepService {

  constructor(private readonly httpService: HttpService) { }

  searchAddressByCode(code: string): Observable<AxiosResponse<AddressResponse>> {
    return this.httpService.get(`https://viacep.com.br/ws/${code}/json/`);
  }
}
