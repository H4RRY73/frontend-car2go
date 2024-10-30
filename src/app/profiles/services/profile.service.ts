import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private apiUrl = 'https://car2go-fake-api.vercel.app/profile'; // URL base de la API

  constructor(private http: HttpClient) {}

  // Obtener el perfil por el userId como query param
  getProfileByUserId(userId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?userId=${userId}`); // Pasar el userId como query param
  }

  updateUserProfile(id: number, userData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, userData);
  }

  // Método para actualizar el perfil
  createUserProfile(userData: any): Observable<any> {
    return this.http.post(this.apiUrl, userData);
  }
}
