import { Component } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { AuthAdminService } from '../services/auth-admin.service';
import { IUser } from '../interface/IUser';

@Component({
  selector: 'app-login-admin-create',
  templateUrl: './login-admin-create.component.html',
  styleUrls: ['./login-admin-create.component.css']
})
export class LoginAdminCreateComponent {
  userForm = this.formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(4)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    private formBuilder: UntypedFormBuilder,
    private userService: AuthAdminService
  ) {}
  onHandleSubmit() {
    // const user: IUser = {
    //   id: '',
    //   username: this.userForm.value.username || '',
    //   password: this.userForm.value.password || '',
    // };

    // this.userService.addUser(user).subscribe((user) => {
    //   alert(`Thêm sản phẩm thành công: ${user.username}`);
    // });
  }
}
