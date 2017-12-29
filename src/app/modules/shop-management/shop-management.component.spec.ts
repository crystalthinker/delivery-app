import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopManagementComponent } from './shop-management.component';

describe('ShopManagementComponent', () => {
  let component: ShopManagementComponent;
  let fixture: ComponentFixture<ShopManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
