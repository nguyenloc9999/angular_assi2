import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAdminUpdateComponent } from './register-admin-update.component';

describe('RegisterAdminUpdateComponent', () => {
  let component: RegisterAdminUpdateComponent;
  let fixture: ComponentFixture<RegisterAdminUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterAdminUpdateComponent]
    });
    fixture = TestBed.createComponent(RegisterAdminUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
