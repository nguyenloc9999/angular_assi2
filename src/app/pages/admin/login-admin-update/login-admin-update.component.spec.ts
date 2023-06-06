import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAdminUpdateComponent } from './login-admin-update.component';

describe('LoginAdminUpdateComponent', () => {
  let component: LoginAdminUpdateComponent;
  let fixture: ComponentFixture<LoginAdminUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginAdminUpdateComponent]
    });
    fixture = TestBed.createComponent(LoginAdminUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
