import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  @Output () nobeCreated = new EventEmitter<Nobe>();

  constructor(
    private _nobeInfoService: NobeService

  ) { }

  ngOnInit(): void {
  }

  submitEvent() {
    this.nobeCreated.emit(this.newNobe);
    this.newNobe = {} as Nobe;//resets all form fields after submit
  }
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

