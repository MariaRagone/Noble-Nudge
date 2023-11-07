import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { User } from 'oidc-client';
import { Observable } from 'rxjs';
import { Nobe } from '../Models/nobe';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient, @Inject('BASE_URL') private baseUrl: string) { }
  
  GetNobeById(nobeId:number):Observable<Nobe>{
    return this.http.get<Nobe>(`${this.baseUrl}Nobes/${nobeId}`);
  }

  GetUserById(userId:number):Observable<User>{
    return this.http.get<User>(`${this.baseUrl}Users/${userId}`);
  }

  AddUser(u: User): Observable<User>{
      return this.http.post<User>(`${this.baseUrl}Users`, u);
    }
  }
