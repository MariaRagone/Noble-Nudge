import { Component, OnInit } from '@angular/core';
import { Categories } from 'src/app/Models/categories';
import { CategoryService } from 'src/app/Services/category.service';
import { NobeService } from 'src/app/Services/nobe.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  selectedCategory: Categories = {} as Categories;
  public allCategoriesList: Categories [] =[];

  constructor(
    private _nobeInfoService: NobeService, 
    private _categoryService: CategoryService) { }

  ngOnInit(): void {
      this.fetchGetAllCategories();
      
    }
    fetchGetAllCategories() {
      // this.userName = this._userService.user;
      this._categoryService.getAllCategories().subscribe((response: Categories[]) => {
        console.log(response);
        this.allCategoriesList = response;
      });
      
    }
  }


