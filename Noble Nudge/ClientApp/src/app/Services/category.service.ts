import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categories } from '../Models/categories';
import { map } from 'rxjs/operators'; // Import the map operator


@Injectable({
  providedIn: 'root',
})
export class CategoryService {

  constructor(private http:HttpClient, @Inject('BASE_URL') private baseUrl: string) { }
 
 
  // ------------------------------------------------------------------------------------
  getEventById(id: number){
    return this.http.get<Event>(`${this.baseUrl}api/Events/${id}`);
  }
  getAllEvents(): Observable<Event[]>{
    return this.http.get<Event[]>(`${this.baseUrl}api/Events`);
  }
// --------------------------------------------------------------------------------
 


  getCategoriesByID(id:number): Observable<Categories[]> {
    return this.http.get<Categories[]>(`${this.baseUrl}Categories/${id}`);
  }

  getAllCategories(): Observable<Categories[]>{
    return this.http.get<Categories[]>(`${this.baseUrl}Categories`);
  }
  getTopCategories(count: number): Observable<string[]> {
    return this.http.get<string[]>(this.baseUrl)
      .pipe(map(categories => categories.slice(0, count))
      );

}}

