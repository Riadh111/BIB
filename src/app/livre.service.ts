import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivreService {

  private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/v1/livres';

  constructor(private http: HttpClient) { }

  getLivre(isbn: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${isbn}`);
  }

  createLivre(titre: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, titre);
  }

  updateLivre(isbn: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${isbn}`, value);
  }

  deleteLivre(isbn: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${isbn}`, { responseType: 'text' });
  }

  getLivresList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
