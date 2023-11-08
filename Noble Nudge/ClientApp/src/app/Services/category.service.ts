import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categories } from '../Models/categories';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {

  private baseUrl = 'your-api-endpoint';

  constructor(private http: HttpClient) {}

  getCategories(): Observable<Categories[]> {
    return this.http.get<Categories[]>(`${this.baseUrl}/categories`);
  }
}

//   callGetCategories(categories: Categories[]) {
//     throw new Error('Method not implemented.');
//   }
  
//   constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string){}

//   getCategories(): Observable<Categories[]> {
//     return this.http.get<Categories[]>(`${this.baseUrl}/Categories`);

//   }

// }