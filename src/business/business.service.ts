import { Injectable } from '@nestjs/common';

@Injectable()
export class BusinessService {
  getHello(): string {
    return 'BusinessService.getHello';
  }
}
