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
      password: this.userForm.value.password || 0,
    };

    this.userService.addUser(user).subscribe((user) => {
      alert(`Thêm sản phẩm thành công: ${user.username}`);
    });
  }
}
