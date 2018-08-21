import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryboyViewComponent } from './deliveryboy-view.component';

describe('DeliveryboyViewComponent', () => {
  let component: DeliveryboyViewComponent;
  let fixture: ComponentFixture<DeliveryboyViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryboyViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryboyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
