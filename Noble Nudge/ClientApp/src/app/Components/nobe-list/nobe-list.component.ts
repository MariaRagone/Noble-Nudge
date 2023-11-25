import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Favorite } from 'src/app/Models/favorite';
import { Nobe } from 'src/app/Models/nobe';
import { NobeService } from 'src/app/Services/nobe.service';
import { UsersService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-nobe-list',
  templateUrl: './nobe-list.component.html',
  styleUrls: ['./nobe-list.component.css']
})
export class NobeListComponent implements OnInit {
  public allNobesList: Nobe [] =[];
  public allFavoritesList: Favorite [] =[];
  userName: string = "";
  userGoogleID: string = "";
  nobeFavorited: boolean = false;
  nobeDeleted:boolean = false;
  sortingDecending:boolean = true;
  sortingNewest:boolean = true;
  displayForm:boolean = false;
  voted:boolean = false;
  newNobe:Nobe={} as Nobe;


  @Output() deleted = new EventEmitter<Nobe>();

  @Output() faveAdded = new EventEmitter<Favorite>();
  @Input() individualNobe:Nobe = {} as Nobe;

  constructor(
    private _nobeService: NobeService, 
    private _userService: UsersService) {}

  ngOnInit(): void {
    this.fetchGetAllNobes();
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

  // getNobesByOldest() {
  //   this._nobeService.getAllNobes().subscribe((response: Nobe[]) => {
  //     console.log(response);
  //     this.allNobesList = response;
  //     this.sortingNewest = false; 
  //     this.allNobesList;
    
  //   });
  // }

  fetchAddNewNobe(newNobe: Nobe) {
    // this.userName = this._userService.user;

    this._nobeService.addNewNobe(newNobe).subscribe((response: Nobe) => {
      console.log(response);
      this.allNobesList.push(response);
    });
  }
//   userLoggedIn(user:string){
//   this.userName = this._userService.user;

//   this.userName = user;
// }

  fetchAddUserToFave(addUser: Favorite){
    // this.userName = this._userService.user;

    this._nobeService.addUserToFave(addUser).subscribe((response: Favorite) => {
      console.log(response);
      this.allFavoritesList.push(response);
    });
  }

  fetchAddNobeToFave(nobe: Nobe) {
    // this.userName = this._userService.user;

    let newFave: Favorite = {} as Favorite;
    this.nobeFavorited = true; 
    newFave.userGoogleId = this.userGoogleID;
    newFave.nobeId = nobe.nobeId; 
    this._nobeService.addNobeToFave(newFave).subscribe((response: Favorite) => {
        console.log(response);
        this.allFavoritesList.push(response);
      });
  }

  fetchRemoveNobeFromFave(nobe: Nobe) {
    // this.userName = this._userService.user;

    let newFave: Favorite = {} as Favorite;
    this.nobeFavorited = false; 
    newFave.userGoogleId = this.userGoogleID;
    newFave.nobeId = nobe.nobeId; 
    this._nobeService.removeNobeFromFave(newFave).subscribe((response: Favorite) => {
        console.log(response);
        this.allFavoritesList.push(response);
  });
}

fetchDeleteNobe(id: number) {
  // this.userName = this._userService.user;

  this.nobeDeleted = true;
  this._nobeService.deleteNobe(id).subscribe((response: Nobe) => {
      console.log(response);
      this.fetchGetAllNobes();
});
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
upVoteNobe():void{

  this.newNobe.points ++;
  this.voted = true;

}
removeVote():void{
  this.newNobe.points --;
  this.voted = false;

}
deleteNobe():void{
  this.deleted.emit(this.individualNobe)
  this.individualNobe={} as Nobe;
  this.nobeDeleted = true;
}


}

