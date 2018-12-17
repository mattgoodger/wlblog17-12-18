import { Component, OnInit, Input } from '@angular/core';
import { Users} from '../../models/users';
import { DataService } from '../../core/data.service';

import { UserType } from 'src/app/user-type.enum';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {



  constructor(private dataservice: DataService) {

   }


  ngOnInit() {

  }

  onSignupClick(username: String, password: String, firstname: String, lastname: String, mobile: number, email: String) {

    const users = new Users(username, password, firstname, lastname, mobile, email, UserType.NORMAL.toString());

    const result = this.dataservice.addUsers(users);



  }

}


