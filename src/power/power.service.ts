import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {
  supplyPower(watts: number): void {
    console.log(`Supply ${watts} worth of power from PowerService`);
  }
}
