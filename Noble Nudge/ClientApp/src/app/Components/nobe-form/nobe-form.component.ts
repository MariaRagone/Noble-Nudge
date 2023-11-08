import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Categories } from 'src/app/Models/categories';
import { CategoryService } from 'src/app/Services/category.service';
// import { getEnabledCategories } from 'trace_events';
import { Nobe } from '../../Models/nobe';
import { NobeService } from '../../Services/nobe.service';


@Component({
  
  selector: 'app-nobe-form',
  templateUrl: './nobe-form.component.html',
  styleUrls: ['./nobe-form.component.css']
})

export class NobeFormComponent implements OnInit {
  newNobe: Nobe = {} as Nobe;
  nobeList: Nobe [] = [];
  displayForm: boolean = false;
  loggedIn: boolean = false;
  doesIdExist: boolean = false;
  selectedCategory: Categories = {} as Categories;
  displayCategories: Categories [] = [];

  @Output() nobeCreated = new EventEmitter<Nobe | Categories>();

  constructor(
    private _nobeInfoService: NobeService, 
    private _categoryService: CategoryService) { }

  ngOnInit(): void {
    this.callGetCategories();
    
  }
  //sends from the ts to the backend/service
  submitNobe(newNobe:Nobe): void {
    this._nobeInfoService.addNewNobe(newNobe).subscribe((response: Nobe) => {
      this.nobeList.push(response);
      newNobe = response;
      console.log(newNobe);
    });
  }

    //emit sends from one ts to another ts
  // submitNobe(newNobe: Nobe) {
  //   this.nobeCreated.emit(this.newNobe);
  //   this.newNobe = {} as Nobe;//resets all form fields after submit
  // }
callGetCategories(){
  this._categoryService.getCategories().subscribe((response:Categories[]) => {
    this.displayCategories = response;
    console.log(response);
  });
}

  // displayCategory(category: Categories) {
  //   this.selectedCategory = category;
  //   this.nobeCreated.emit(category);
  // }
  
  newNobeInfo(newNobe: Nobe): void {
    newNobe.nobeName = this.newNobe.nobeName;
    
    this._nobeInfoService.addNewNobe(newNobe).subscribe((response: Nobe) => {
      this.nobeList.push(response);
      this.doesIdExist = true;
    });
    this.nobeList = [];
     
  }
  toggleDisplay(): void {
    this.displayForm = !this.displayForm;
  }
}




//THIS IS FROM THE SCHEDULER APP-----------------------------
  // addNewNobe(newNobe: Nobe): void {
  //   this.updateDateTime();
  //       console.log(newEvent)
  //   let newNewDate: Date = new Date(newEvent.dateTime);
  //   let timestamp = newNewDate.getTime() + 30 * 60000;
  //   newEvent.endDateTime = new Date(timestamp);
  // console.log(newNewDate)
  // console.log(timestamp)
  // console.log(newEvent.endDateTime)
  // console.log(this.eventList)
  //   this.alreadyExists = false;
  //   if(this.futureEventOnly(newNewDate) == true){

  //   for (let existingEvent of this.eventList) {
  //     if (!this.isEventOverlapping(existingEvent, newEvent)) {
  //     console.log("entering if")     
  //   }
  //     else{
  //       this.alreadyExists = true;
  //       console.log("entering else")
  //     }
  //   }

  //     if ((this.user) && (this.alreadyExists === false)) {
  //       console.log('second if is working')
  //       this.userinfoservice.getById(this.user.id).subscribe((response: UserInfo) => {
  //       if (this.doesIdExist) {
  //         this.newUser = response;
  //         newEvent.googleId = this.newUser.googleId;
  //         newEvent.address = this.newUser.address;
  //         newEvent.city = this.newUser.city;
  //         newEvent.state = this.newUser.state;
  //         newEvent.firstName = this.user.firstName;
  //         newEvent.lastName = this.user.lastName;
  //       }
  //       this._formService.addEvent(newEvent).subscribe((response: Userform) => {
  //         this.eventList.push(response);
  //       });
  //     });
  //   }
  //    else if(this.alreadyExists === false) {
  //     this._formService.addEvent(newEvent).subscribe((response: Userform) => {
  //       this.eventList.push(response);
  //     });
  //   }
  //   else if(this.alreadyExists === true){
  //     console.log('bool is working')
  //   }
  // }


  //   this.e = {} as Userform;
  //   this.newUser = {} as UserInfo;
  //   this.GetEvents();
  // }





