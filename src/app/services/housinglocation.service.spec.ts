import { TestBed } from '@angular/core/testing';

import { HousinglocationService } from './housinglocation.service';

describe('HousinglocationService', () => {
  let service: HousinglocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HousinglocationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
