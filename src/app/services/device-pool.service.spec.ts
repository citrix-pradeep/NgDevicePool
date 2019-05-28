import { TestBed } from '@angular/core/testing';

import { DevicePoolService } from './device-pool.service';

describe('DevicePoolService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DevicePoolService = TestBed.get(DevicePoolService);
    expect(service).toBeTruthy();
  });
});
