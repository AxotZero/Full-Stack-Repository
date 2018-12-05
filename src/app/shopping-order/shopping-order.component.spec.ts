import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingOrderComponent } from './shopping-order.component';

describe('ShoppingOrderComponent', () => {
  let component: ShoppingOrderComponent;
  let fixture: ComponentFixture<ShoppingOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
