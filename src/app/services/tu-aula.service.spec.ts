import { TestBed, inject } from '@angular/core/testing';

import { TuAulaService } from './tu-aula.service';

describe('TuAulaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TuAulaService]
    });
  });

  it('should be created', inject([TuAulaService], (service: TuAulaService) => {
    expect(service).toBeTruthy();
  }));
});
