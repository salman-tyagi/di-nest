import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {
  powerSupply(watts: number): void {
    console.log(`supplying ${watts} worth of power`);
  }
}
