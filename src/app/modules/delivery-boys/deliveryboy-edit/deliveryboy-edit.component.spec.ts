import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryboyEditComponent } from './deliveryboy-edit.component';

describe('DeliveryboyEditComponent', () => {
  let component: DeliveryboyEditComponent;
  let fixture: ComponentFixture<DeliveryboyEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryboyEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryboyEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
