import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryboyListComponent } from './deliveryboy-list.component';

describe('DeliveryboyListComponent', () => {
  let component: DeliveryboyListComponent;
  let fixture: ComponentFixture<DeliveryboyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryboyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryboyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
