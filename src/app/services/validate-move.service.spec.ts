import { TestBed } from '@angular/core/testing';

import { ValidateMoveService } from './validate-move.service';

describe('ValidateMoveService', () => {
  let service: ValidateMoveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidateMoveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
