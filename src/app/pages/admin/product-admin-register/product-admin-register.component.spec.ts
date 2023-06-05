import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAdminRegisterComponent } from './product-admin-register.component';

describe('ProductAdminRegisterComponent', () => {
  let component: ProductAdminRegisterComponent;
  let fixture: ComponentFixture<ProductAdminRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductAdminRegisterComponent]
    });
    fixture = TestBed.createComponent(ProductAdminRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
