import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../interface/IUser';
@Injectable({
  providedIn: 'root'
})
export class AuthAdminService {
  
  API = 'http://localhost:3000/users';

  constructor(public http: HttpClient) {}
  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${this.API}`);
  }
  getUserById(id: string): Observable<IUser> {
    return this.http.get<IUser>(`${this.API}/${id}`);
  }

  addUser(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(`${this.API}`, user);
  }
  updateUser(user: IUser): Observable<IUser> {
    return this.http.put<IUser>(`${this.API}/${user.id}`, user);
  }
  deleteUser(id: string): Observable<IUser> {
    return this.http.delete<IUser>(`${this.API}/${id}`);
  }
  login(email: string ): Observable<IUser> {
    return this.http.get<IUser>(`${this.API}?email=${email}`);
  } 
  // login(email: string, password: string) {
  //   const db = require('./db.json');
  //   // Find the user with the matching email and password
  //   const user = db.users.find(u => u.email === email && u.password === password);

  //   if (user) {
  //     // If the user is found, return an observable of the user object
  //     return of(user);
  //   } else {
  //     // If the user is not found, return an error observable with a custom error message
  //     return throwError({ message: 'Invalid email or password' });
  // }
}
