import { TestBed } from '@angular/core/testing';

import { BusInfomationService } from './bus-infomation.service';

describe('BusInfomationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BusInfomationService = TestBed.get(BusInfomationService);
    expect(service).toBeTruthy();
  });
});
