import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from 'src/app/core/data.service';
import { IUser } from 'src/app/interfaces';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {

  users: any = {};
  usersArray: IUser[];

  constructor(private http: Http, private dataService: DataService ) { }

//   getAllUsers(): void {
//     this.dataService.getAllUsers()
//         .subscribe(
//             resultArray => this.usersArray = resultArray,
//         );
// }

ngOnInit() {
    // this.getAllUsers();
}

}
