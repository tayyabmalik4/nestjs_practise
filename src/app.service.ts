import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Tayyab! Now you start the Right . Now i start Crud Application';
  }
}
