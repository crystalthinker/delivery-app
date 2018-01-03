import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryboyAssignmentsComponent } from './deliveryboy-assignments.component';

describe('DeliveryboyAssignmentsComponent', () => {
  let component: DeliveryboyAssignmentsComponent;
  let fixture: ComponentFixture<DeliveryboyAssignmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryboyAssignmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryboyAssignmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
