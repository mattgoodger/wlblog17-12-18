import { ActivatedRoute, Router } from '@angular/router';
import { UserType } from 'src/app/user-type.enum';
import { Component, OnInit } from '@angular/core';
import { MainRoutingModule } from '../main-routing.module';
import { DataService } from '../../core/data.service';
import { Users } from 'src/app/models/users';
import { TouchSequence } from 'selenium-webdriver';
import { delay } from 'rxjs/internal/operators/delay';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { LoginService } from 'src/app/core/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userCredentials = {
    userName: '',
    password: ''
  };

  constructor(private loginSerivce: LoginService) {}

  user: Users = null;
  loginSuccess: boolean;
  errorStatus: number;

  async onLoginClick() {
    this.user = null;
    this.errorStatus = null;
    this.loginSuccess = true;

    if (this.userCredentials.userName === '' || this.userCredentials.password === '') {
      alert('Please ensure all fields are filled.');
      return;
    }
    // returns the details of the user matching the username & password given
    this.user = await this.loginSerivce.findUser(this.userCredentials.userName, this.userCredentials.password);

    // checks to see if this.user is a valid user or null
    this.loginSuccess = this.loginSerivce.checkLoginSuccess(this.user);
  }

  ngOnInit() {    this.loginSuccess = true; }
}
