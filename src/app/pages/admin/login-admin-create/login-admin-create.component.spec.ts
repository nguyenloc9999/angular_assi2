import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAdminCreateComponent } from './login-admin-create.component';

describe('LoginAdminCreateComponent', () => {
  let component: LoginAdminCreateComponent;
  let fixture: ComponentFixture<LoginAdminCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginAdminCreateComponent]
    });
    fixture = TestBed.createComponent(LoginAdminCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
