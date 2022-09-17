import { TestBed } from '@angular/core/testing';

import { MedicinalService } from './medicinal.service';

describe('MedicinalService', () => {
  let service: MedicinalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicinalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
