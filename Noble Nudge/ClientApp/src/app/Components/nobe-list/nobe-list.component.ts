import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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


  @Output() faveAdded = new EventEmitter<Favorite>();


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
    });
  }


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

  getNobesByNewest(): Nobe[] {
    // this.userName = this._userService.user;

    return this.allNobesList.reverse();
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

  fetchRemoveEventFromFave(nobe: Nobe) {
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
// callGetEventsByCategory(Category: Event):void{
//   this._eventService.getEventsByCategory(Category).subscribe((response: Event[]) => {
//     console.log(response);
//     this.allEventList = response;
//   });
// }
fetchDeleteNobe(id: number) {
  // this.userName = this._userService.user;

  this.nobeDeleted = true;
  this._nobeService.deleteNobe(id).subscribe((response: Nobe) => {
      console.log(response);
      this.fetchGetAllNobes();
});
}

// callDeleteEvent():void{
//   this._eventService.emit(this.individualPost)
//   this._eventService={} as Event;
//   this.postDeleted = true;
// }
}
// deleteEvent(id: number): Observable<Event>{
//   return this.http.delete<Event>(`${this.baseUrl}api/Events/${id}`);
// }

// removeEventFromFave(removedFavorite:Favorite): Observable<Favorite>{
//   return this.http.delete<Favorite>(`${this.baseUrl}api/Events/Favorite?UserName=${removedFavorite.userName}&EventId=${removedFavorite.eventId}`);
// }


