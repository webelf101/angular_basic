import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersAddOrderlineComponent } from './orders-add-orderline.component';

describe('OrdersAddOrderlineComponent', () => {
  let component: OrdersAddOrderlineComponent;
  let fixture: ComponentFixture<OrdersAddOrderlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersAddOrderlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersAddOrderlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
