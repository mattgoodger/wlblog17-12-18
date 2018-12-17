import { Observable, throwError } from 'rxjs';
import { catchError, map, tap} from 'rxjs/operators';
import { IUser, IBlog } from './../interfaces';
import { Injectable } from '@angular/core';
import { Headers, HttpModule, Http } from '@angular/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class DataService {

  private baseUrl = 'http://localhost:5000/wlblog/api/';

  constructor(private http: Http) { }

  getHeaders(): Headers {
    const headers = new Headers();
    headers.set('Accept', 'application/json');
    headers.set('Content-Type', 'application/json');
    return headers;
  }

  addUsers(user: IUser) {
    return this.http.post(this.baseUrl + 'users', user, {headers : this.getHeaders()}).subscribe(res => console.log(res.status
    ));
  }

  getAllUsers() {
    return this.http.get(this.baseUrl + '/users');

  }


  /*
//add authorisation to this method below (adding a certain admin code to the url to only allow people with the code to access the api)
  getUserByID(id: string){
    return this.http.get(this.baseUrl + 'users/' + id);
  }
//add authorisation to this method below

*/
// checkAdmin(user: Users): boolean {
//   let adminSuccess: boolean;

//   if (admin != null) {
//     console.log(user.firstName + ' has been logged in.');
//     adminSuccess = true;
//   } else if (user == null) {
//     console.log('user not found, credentials provided did not match any in db');
//     adminSuccess = false;
//   }
//   console.log(adminSuccess ? 'login success' : 'login failed');
//   return adminSuccess;
// }

  getUserByIDandPassword(id: String, password: String): Promise<any> {
    return this.http.get(this.baseUrl + 'users/' + id + '/' + password)
    .pipe(
      catchError(error => this.handleError(error)),
      map(res => res)).toPromise();
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(
      error
    );

  }

  addBlog(blog: IBlog) {
    return this.http.post(this.baseUrl + 'blogs', blog, {headers : this.getHeaders()}).subscribe(res => console.log(res.status
    ));
  }

}
