import { HttpClient } from '@angular/common/http';
import { Injectable, InjectionToken, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Favorite } from '../Models/favorite';
import { Nobe } from '../Models/nobe';


@Injectable({  providedIn: 'root'
})
export class NobeService {

  constructor(private http:HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  getAllNobes(): Observable<Nobe[]>{
    return this.http.get<Nobe[]>(`${this.baseUrl}Nobes`);
  }
  getNobeById(id: number){
    return this.http.get<Nobe>(`${this.baseUrl}Nobes/${id}`);
  }

  getNobeByCategory(Category:Nobe): Observable<Nobe> {
    return this.http.get<Nobe>(`${this.baseUrl}Nobes/Category?=${Category}`);
  }

  addNewNobe(newNobe: Nobe): Observable<Nobe>{
    return this.http.post<Nobe>(`${this.baseUrl}Nobes`, newNobe); 
  }

  deleteNobe(id: number): Observable<Nobe>{
    return this.http.delete<Nobe>(`${this.baseUrl}Nobes/${id}`);
  }

  getAllFavorites(): Observable<Favorite[]>{
    return this.http.get<Favorite[]>(`${this.baseUrl}Nobes/Favorite`);
  }


  addNobeToFave(addFave:Favorite): Observable<Favorite>{
    return this.http.post<Favorite>(`${this.baseUrl}Nobes/Favorite`, addFave); 
  }
  
  addUserToFave(addUser:Favorite): Observable<Favorite>{
    return this.http.post<Favorite>(`${this.baseUrl}Nobes/Favorite`, addUser); 
  }

  removeNobeFromFave(removedFavorite:Favorite): Observable<Favorite>{
    return this.http.delete<Favorite>(`${this.baseUrl}Nobe/Favorite?UserName=${removedFavorite.userGoogleId}&NobeId=${removedFavorite.nobeId}`);
  }

  //this is for the image uploader fix this later
  uploadFile(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);

    return this.http.post('https://localhost:5001/api/file/upload', formData);
  }

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

// }

}
