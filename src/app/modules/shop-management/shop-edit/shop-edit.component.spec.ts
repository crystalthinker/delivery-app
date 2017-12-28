import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopEditComponent } from './shop-edit.component';

describe('ShopEditComponent', () => {
  let component: ShopEditComponent;
  let fixture: ComponentFixture<ShopEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
