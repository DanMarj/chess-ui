import { TestBed } from '@angular/core/testing';

import { ValidatePgnService } from './validate-pgn.service';

describe('ValidatePgnService', () => {
  let service: ValidatePgnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidatePgnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
