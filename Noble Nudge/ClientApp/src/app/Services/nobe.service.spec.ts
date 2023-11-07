import { TestBed } from '@angular/core/testing';

import { NobeService } from './nobe.service';

describe('NobeService', () => {
  let service: NobeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NobeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
