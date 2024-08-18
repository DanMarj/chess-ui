import { TestBed } from '@angular/core/testing';

import { CheckCheckerService } from './check-checker.service';

describe('CheckCheckerService', () => {
  let service: CheckCheckerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckCheckerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
