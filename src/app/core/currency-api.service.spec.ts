import { TestBed, inject } from '@angular/core/testing';

import { CurrencyApiService } from './currency-api.service';

describe('CurrencyApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrencyApiService]
    });
  });

  it('should ...', inject([CurrencyApiService], (service: CurrencyApiService) => {
    expect(service).toBeTruthy();
  }));
});
