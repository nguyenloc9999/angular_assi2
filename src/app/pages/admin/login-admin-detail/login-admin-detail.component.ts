import { Component } from '@angular/core';
import { IUser } from '../interface/IUser';
import { AuthAdminService } from '../services/auth-admin.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-admin-detail',
  templateUrl: './login-admin-detail.component.html',
  styleUrls: ['./login-admin-detail.component.css']
})
export class LoginAdminDetailComponent {
  user!: IUser;
  constructor(
    private route: ActivatedRoute,
    private userService: AuthAdminService
  ) {
    this.route.paramMap.subscribe((param) => {
      const id = String(param.get('id'));
      this.userService.getUserById(id).subscribe(
        (user) => {
          this.user = user;
        },
        (error) => console.log(error.message)
      );
    });
  }
}
