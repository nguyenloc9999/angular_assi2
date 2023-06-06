import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser, Ilogin } from '../interface/IUser';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthAdminService {
  API = 'http://localhost:3000/users';
  constructor(public http: HttpClient) { 
  }
  addUser(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(`${this.API}`, user);
  }
  login(email: string ): Observable<IUser> {
    return this.http.get<IUser>(`${this.API}?email=${email}`);
  } 
  
}
