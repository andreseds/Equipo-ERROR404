import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderStatesComponent } from './order-states.component';

describe('OrderStatesComponent', () => {
  let component: OrderStatesComponent;
  let fixture: ComponentFixture<OrderStatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderStatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
