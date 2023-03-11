import { TestBed } from '@angular/core/testing';

import { InertiaService } from './inertia.service';

describe('InertiaService', () => {
  let service: InertiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InertiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
