import { Component } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { AuthAdminService } from '../services/auth-admin.service';
import { IUser } from '../interface/IUser';

@Component({
  selector: 'app-register-admin-create',
  templateUrl: './register-admin-create.component.html',
  styleUrls: ['./register-admin-create.component.css']
})
export class RegisterAdminCreateComponent {
  userForm = this.formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    private formBuilder: UntypedFormBuilder,
    private userService: AuthAdminService
  ) {}
  onHandleSubmit() {
    const user: IUser = {
      id: '',
      username: this.userForm.value.username || '',
      email: this.userForm.value.email || '',
      password: this.userForm.value.password || '',
    };

    this.userService.addUser(user).subscribe((user) => {
      alert(`Thêm sản phẩm thành công: ${user.username}`);
    });
  }
}
