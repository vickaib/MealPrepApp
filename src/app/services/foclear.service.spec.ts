import { TestBed } from '@angular/core/testing';

import { FoclearService } from './foclear.service';

describe('FoclearService', () => {
  let service: FoclearService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoclearService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
