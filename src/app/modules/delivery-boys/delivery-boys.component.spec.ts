import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryBoysComponent } from './delivery-boys.component';

describe('DeliveryBoysComponent', () => {
  let component: DeliveryBoysComponent;
  let fixture: ComponentFixture<DeliveryBoysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryBoysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryBoysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
