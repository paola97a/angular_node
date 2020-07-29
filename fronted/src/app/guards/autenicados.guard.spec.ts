import { TestBed } from '@angular/core/testing';

import { AutenicadosGuard } from './autenicados.guard';

describe('AutenicadosGuard', () => {
  let guard: AutenicadosGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AutenicadosGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
