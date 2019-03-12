import { TestBed, async, inject } from '@angular/core/testing';

import { GuardregGuard } from './guardreg.guard';

describe('GuardregGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuardregGuard]
    });
  });

  it('should ...', inject([GuardregGuard], (guard: GuardregGuard) => {
    expect(guard).toBeTruthy();
  }));
});
