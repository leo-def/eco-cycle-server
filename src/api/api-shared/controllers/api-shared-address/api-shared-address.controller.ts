import { Controller, Get, Param } from '@nestjs/common';
import { AddressService } from '../../../../business/shared/address/address.service';

@Controller('address')
export class ApiSharedAddressController {

  constructor(private readonly service: AddressService) { }

  @Get('code/:code')
  async searchAddressByCode(@Param('code') code: string) {
    const response = await this.service.searchAddressByCode(code);
    return response;
  }
}
