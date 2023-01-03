import { TestBed } from '@angular/core/testing';

import { weatherService } from './weatherService';

describe('weatherService', () => {
  let service: weatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(weatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
