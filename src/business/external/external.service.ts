import { Injectable } from '@nestjs/common';

@Injectable()
export class ExternalService {
  getHello(): string {
    return 'ExternalService.getHello';
  }
}
