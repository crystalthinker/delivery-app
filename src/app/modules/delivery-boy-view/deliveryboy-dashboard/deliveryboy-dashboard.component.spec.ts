import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryboyDashboardComponent } from './deliveryboy-dashboard.component';

describe('DeliveryboyDashboardComponent', () => {
  let component: DeliveryboyDashboardComponent;
  let fixture: ComponentFixture<DeliveryboyDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryboyDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryboyDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
