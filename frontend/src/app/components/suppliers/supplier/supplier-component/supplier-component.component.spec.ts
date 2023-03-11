import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierComponentComponent } from './supplier-component.component';

describe('SupplierComponentComponent', () => {
  let component: SupplierComponentComponent;
  let fixture: ComponentFixture<SupplierComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplierComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupplierComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
