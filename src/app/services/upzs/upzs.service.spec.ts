import { TestBed, inject } from '@angular/core/testing';

import { UpzsService } from './upzs.service';

describe('UpzsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpzsService]
    });
  });

  it('should be created', inject([UpzsService], (service: UpzsService) => {
    expect(service).toBeTruthy();
  }));
});
