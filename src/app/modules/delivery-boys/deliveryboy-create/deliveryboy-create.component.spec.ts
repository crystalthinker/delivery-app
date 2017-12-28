import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryboyCreateComponent } from './deliveryboy-create.component';

describe('DeliveryboyCreateComponent', () => {
  let component: DeliveryboyCreateComponent;
  let fixture: ComponentFixture<DeliveryboyCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryboyCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryboyCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
