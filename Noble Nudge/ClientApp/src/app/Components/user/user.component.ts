import { Component } from '@angular/core';
import { User } from 'oidc-client';
import { Users } from 'src/app/Models/user';
import { UsersService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  constructor(private _userService: UsersService){}
  public newUser: User = {} as User; //variable that connects your inputs
  public userList: Users [] = [];

  id: number = 2;
  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this._userService.GetUserById(this.id).subscribe((response: User) => { // Adjust the type to User
      console.log(response);
      this.newUser = response;
    });
  }

    addUser() {
      //this.allUsersResult = []; //you can remove this line, but it empties the array of the users. the website looks like its loading again
      this._userService.AddUser(this.newUser).subscribe((response: User) => {
        console.log(response);
        this.getUser(); //recall the method so that the user list refreshes
      });
    }
  }
