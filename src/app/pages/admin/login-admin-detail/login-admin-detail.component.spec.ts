import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAdminDetailComponent } from './login-admin-detail.component';

describe('LoginAdminDetailComponent', () => {
  let component: LoginAdminDetailComponent;
  let fixture: ComponentFixture<LoginAdminDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginAdminDetailComponent]
    });
    fixture = TestBed.createComponent(LoginAdminDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
