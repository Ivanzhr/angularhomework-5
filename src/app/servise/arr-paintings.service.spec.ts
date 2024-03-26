import { TestBed } from '@angular/core/testing';

import { ArrPaintingsService } from './arr-paintings.service';

describe('ArrPaintingsService', () => {
  let service: ArrPaintingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArrPaintingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
