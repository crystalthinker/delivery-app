import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryboyProfileComponent } from './deliveryboy-profile.component';

describe('DeliveryboyProfileComponent', () => {
  let component: DeliveryboyProfileComponent;
  let fixture: ComponentFixture<DeliveryboyProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryboyProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryboyProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
