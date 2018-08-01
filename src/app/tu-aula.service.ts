import { Injectable } from '@angular/core';
import { Upz } from './models'
import { MOCK_UPZS } from './mocks';

@Injectable({
  providedIn: 'root'
})
export class TuAulaService {

  constructor() { }

  getUpzs() : Array<Upz> {
    return MOCK_UPZS;
  }
}
