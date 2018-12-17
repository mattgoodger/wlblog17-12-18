import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { Users } from '../models/users';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private dataService: DataService, private router: Router) { }

  async findUser(UserName: String, Password: String): Promise<Users> {
    let response: any;
    let errorStatus: any;

    response = <any>await this.dataService
    .getUserByIDandPassword(UserName, Password)
    .catch(e => errorStatus = e.status);

    if (errorStatus != null) {
      console.log(errorStatus);
      return;
    }
    return response.json();
  }

  checkLoginSuccess(user: Users): boolean {
    let loginSuccess: boolean;

    if (user != null) {
      console.log(user.firstName + ' has been logged in.');
      loginSuccess = true;
      this.router.navigate(['/profile']);
    } else if (user == null) {
      console.log('user not found, credentials provided did not match any in db');
      loginSuccess = false;
    }
    console.log(loginSuccess ? 'login success' : 'login failed');
    return loginSuccess;
  }


}
