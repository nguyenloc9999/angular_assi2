import { Component } from '@angular/core';
import { IUser } from '../interface/IUser';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthAdminService } from '../services/auth-admin.service';

@Component({
  selector: 'app-login-admin-update',
  templateUrl: './login-admin-update.component.html',
  styleUrls: ['./login-admin-update.component.css']
})
export class LoginAdminUpdateComponent {
  user!: IUser;
  userForm = this.formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(4)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private userService: AuthAdminService,
    private router: ActivatedRoute
  ) {
    this.router.paramMap.subscribe((params) => {
      const id = String(params.get('id'));
      this.userService.getUserById(id).subscribe(
        (data) => {
          console.log(data);
          this.user = data;

          this.userForm.patchValue({
            username: data.username,
            password: data.password
          });
        },
        (error) => console.log(error.message)
      );
    });
  }
  onHandleSubmit() {
    if (this.userForm.valid) {
      const user: IUser = {
        id: '',
        username: this.userForm.value.username || '',
        password: this.userForm.value.password || '',
      };

      this.userService.updateUser(user).subscribe((user) => {
        console.log(user);
        console.log('user', user);
      });
    }
  }
}
