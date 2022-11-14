import { TestBed } from '@angular/core/testing';

import { BasketGuardGuard } from './basket-guard.guard';

describe('BasketGuardGuard', () => {
  let guard: BasketGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BasketGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
