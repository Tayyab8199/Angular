import { TestBed } from '@angular/core/testing';

import { CandeactGuard } from './candeact.guard';

describe('CandeactGuard', () => {
  let guard: CandeactGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CandeactGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
