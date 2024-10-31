import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private apiUrl = 'http://localhost:8080/api/v1/reviews';

  constructor(private http: HttpClient) {}

  getAllReviews(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  getReviewsByCarId(carId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${carId}`);
  }

  createReview(review: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, review);
  }
}
