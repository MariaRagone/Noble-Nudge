import { HttpClient } from '@angular/common/http';
import { Injectable, InjectionToken, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Nobe } from '../Models/nobe';


@Injectable({  providedIn: 'root'
})
export class NobeService {

  constructor(private http:HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  getAllNobes(): Observable<Nobe[]>{
    return this.http.get<Nobe[]>(`${this.baseUrl}/Nobes`);
  }
  addNewNobe(newNobe: Nobe): Observable<Nobe>{
    return this.http.post<Nobe>(`${this.baseUrl}/Nobes`, newNobe); 
  }

  deleteNobe(id: number): Observable<Nobe>{
    return this.http.delete<Nobe>(`${this.baseUrl}Nobes/${id}`);
  }

  // getAllFavorites(): Observable<Favorite[]>{
  //   return this.http.get<Favorite[]>(`${this.baseUrl}api/Events/Favorite`);
  // }

  // getNobeById(id: number){
  //   return this.http.get<Event>(`${this.baseUrl}api/Events/${id}`);
  // }

  // getEventsByCategory(Category:Event): Observable<Event> {
  //   return this.http.get<Event>(`${this.baseUrl}api/Events/Category?=${Category}`);
  // }


  // addEventToFave(addFave:Favorite): Observable<Favorite>{
  //   return this.http.post<Favorite>(`${this.baseUrl}api/Events/Favorite`, addFave); 
  // }
  // getFavesByUser(userName:string): Observable<Event []>{
  //   return this.http.get<Event[]>(`${this.baseUrl}api/Events/FavoritesByUser?userName=${userName}`);
  // }
  // removeEventFromFave(removedFavorite:Favorite): Observable<Favorite>{
  //   this.eventFavorited = false;
  //   return this.http.delete<Favorite>(`${this.baseUrl}api/Events/Favorite`, removedFavorite); 
  // }

//   addUserToFave(addUser:Favorite): Observable<Favorite>{
//     return this.http.post<Favorite>(`${this.baseUrl}api/Events/Favorite`, addUser); 
//   }

//   updateEvent(updateEvent:Event): Observable<Event>{
//     return this.http.put<Event>(`${this.baseUrl}api/Events/${updateEvent.id}`, updateEvent);
//   }

//   updateUserFave(updateUser:Favorite): Observable<Favorite>{
//     return this.http.put<Favorite>(`${this.baseUrl}api/Events/Favorite/${updateUser.userName}`, updateUser);
//   }
//   deleteEvent(id: number): Observable<Event>{
//     return this.http.delete<Event>(`${this.baseUrl}api/Events/${id}`);
//   }

//   removeEventFromFave(removedFavorite:Favorite): Observable<Favorite>{
//     return this.http.delete<Favorite>(`${this.baseUrl}api/Events/Favorite?UserName=${removedFavorite.userName}&EventId=${removedFavorite.eventId}`);
//   }
// }

}
