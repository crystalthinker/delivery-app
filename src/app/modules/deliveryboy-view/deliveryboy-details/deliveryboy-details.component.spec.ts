import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryboyDetailsComponent } from './deliveryboy-details.component';

describe('DeliveryboyDetailsComponent', () => {
  let component: DeliveryboyDetailsComponent;
  let fixture: ComponentFixture<DeliveryboyDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryboyDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryboyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
