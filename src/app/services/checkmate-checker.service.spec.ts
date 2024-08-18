import { TestBed } from '@angular/core/testing';

import { CheckmateCheckerService } from './checkmate-checker.service';

describe('CheckmateCheckerService', () => {
  let service: CheckmateCheckerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckmateCheckerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
