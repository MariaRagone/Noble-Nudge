import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categories } from '../Models/categories';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string){}

  getCategories(): Observable<Categories[]> {
    return this.http.get<Categories[]>(`${this.baseUrl}/categories`);

  }

}