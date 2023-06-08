import { Component } from '@angular/core';
import { IUser, Ilogin } from '../interface/IUser';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthAdminService } from '../services/auth-admin.service';

@Component({
  selector: 'app-login-admin-update',
  templateUrl: './login-admin-update.component.html',
  styleUrls: ['./login-admin-update.component.css']
})
export class LoginAdminUpdateComponent {
  user!: Ilogin;
  userForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.minLength(4)]],
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
            email: data.username,
            password: data.password
          });
        },
        (error) => console.log(error.message)
      );
    });
  }
  onHandleSubmit() {
    // if (this.userForm.valid) {
    //   const user: Ilogin = {
    //     id: '',
    //     email: this.userForm.value.email || '',
    //     password: this.userForm.value.password || '',
    //   };

    //   this.userService.updateUser(user).subscribe((user) => {
    //     console.log(user);
    //     console.log('user', user);
    //   });
  }
}

