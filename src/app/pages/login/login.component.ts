import { Component } from '@angular/core';
import { IUser } from '../admin/interface/IUser';
import { AuthAdminService } from '../admin/services/auth-admin.service';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials= {
    email : '',
    password: '',
  };
  user : IUser | undefined

  constructor(
    private userServiec: AuthAdminService,
    private router: Router
  ) {
  }

  onSubmit() {
    this.userServiec.login(this.credentials.email).subscribe(user=>{
      this.user= user
      console.log(user);
    })
  }
}
