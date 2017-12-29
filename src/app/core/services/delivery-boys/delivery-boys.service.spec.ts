import { TestBed, inject } from '@angular/core/testing';

import { DeliveryBoysService } from './delivery-boys.service';

describe('DeliveryBoysService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeliveryBoysService]
    });
  });

  it('should be created', inject([DeliveryBoysService], (service: DeliveryBoysService) => {
    expect(service).toBeTruthy();
  }));
});
