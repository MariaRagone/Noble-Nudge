import { Component } from '@angular/core';
import { Users } from 'src/app/Models/user';
import { UsersService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  constructor(private _userService: UsersService){}
  newUser: Users = {} as Users; //variable that connects your inputs
  public userList: Users [] = [];

  id: number = 1;
  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this._userService.GetUserById(this.id).subscribe((reponse: Users) => {
      console.log(reponse);
      this.newUser = reponse;
    });
  }

  addUser() {
    //this.allUsersResult = []; //you can remove this line, but it empties the array of the users. the website looks like its loading again
    this._userService.AddUser(this.newUser).subscribe((response: Users) => {
      console.log(response);
      this.getUser(); //recall the method so that the user list refreshes
    });
  }
}
