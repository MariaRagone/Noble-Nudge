import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Favorite } from 'src/app/Models/favorite';
import { Nobe } from 'src/app/Models/nobe';
import { NobeService } from 'src/app/Services/nobe.service';
import { UsersService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-nobes-page',
  templateUrl: './nobes-page.component.html',
  styleUrls: ['./nobes-page.component.css']
})
export class NobesPageComponent implements OnInit {
  public allNobesList: Nobe [] =[];
  public allFavoritesList: Favorite [] =[];
  userName: string = "";
  userGoogleID: string = "";
  nobeFavorited: boolean = false;
  nobeDeleted:boolean = false;
  sortingDecending:boolean = true;
  sortingNewest:boolean = true;

  @Output() faveAdded = new EventEmitter<Favorite>();


  constructor(
    private _nobeService: NobeService, 
    private _userService: UsersService) {}


  ngOnInit(): void {
  }
  sortNobesByVotesDecending():void{
    this.sortingDecending = true;
    this.allNobesList.sort((a,b) => b.points - a.points)
    //if b - a is negative then b should come before a, 
    //if b - a is zero then there is no change
  }
  sortNobesByVotesAscending():void{
    this.sortingDecending = false;
    this.allNobesList.sort((a,b) => a.points - b.points)
    //if b - a is negative then b should come before a, 
    //if b - a is zero then there is no change
  }
  getNobesByOldest(): Nobe[] {
    this._nobeService.getAllNobes().subscribe((response: Nobe[]) => {
      console.log(response);
      this.allNobesList = response;
      this.sortingNewest = false; 
      // Return the array here
      return this.allNobesList;
    });
    return [];
  
  }
  fetchGetAllNobes() {
    // this.userName = this._userService.user;

    this._nobeService.getAllNobes().subscribe((response: Nobe[]) => {
      console.log(response);
      this.allNobesList = response;
      this.sortingNewest = true; 
      this.allNobesList.reverse();
    
    });
  }



}
