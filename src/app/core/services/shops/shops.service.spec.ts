import { TestBed, inject } from '@angular/core/testing';

import { ShopsService } from './shops.service';

describe('ShopsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShopsService]
    });
  });

  it('should be created', inject([ShopsService], (service: ShopsService) => {
    expect(service).toBeTruthy();
  }));
});
