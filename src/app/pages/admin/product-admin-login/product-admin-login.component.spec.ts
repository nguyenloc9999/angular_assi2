import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAdminLoginComponent } from './product-admin-login.component';

describe('ProductAdminLoginComponent', () => {
  let component: ProductAdminLoginComponent;
  let fixture: ComponentFixture<ProductAdminLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductAdminLoginComponent]
    });
    fixture = TestBed.createComponent(ProductAdminLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
