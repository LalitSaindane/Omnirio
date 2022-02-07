import { TestBed } from '@angular/core/testing';

import { ProvideDataService } from './provide-data.service';

describe('ProvideDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProvideDataService = TestBed.get(ProvideDataService);
    expect(service).toBeTruthy();
  });
});
