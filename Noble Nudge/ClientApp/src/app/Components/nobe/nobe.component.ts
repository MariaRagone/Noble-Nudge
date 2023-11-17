import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Favorite } from 'src/app/Models/favorite';
import { Nobe } from 'src/app/Models/nobe';
import { NobeService } from 'src/app/Services/nobe.service';
import { UsersService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-nobe',
  templateUrl: './nobe.component.html',
  styleUrls: ['./nobe.component.css']
})
export class NobeComponent implements OnInit {
  displayForm:boolean = false;
  voted:boolean = false;
  nobeDeleted:boolean = false;

  @Output() deleted = new EventEmitter<Nobe>();
  @Output() faveAdded = new EventEmitter<Favorite>();
  @Input() individualNobe:Nobe = {} as Nobe;
  newNobe:Nobe={} as Nobe;
  


  constructor(
    private _nobeService: NobeService, 
    private _userService: UsersService) {}

  ngOnInit(): void {
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
