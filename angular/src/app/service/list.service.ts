import { Injectable } from '@angular/core';

import { Animals } from '../Animals';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiUrl = 'http://localhost:3000/animals';

  constructor(private http: HttpClient) { }

  remove(animals: Animals[], animal: Animals) {
    return animals.filter((a) => animal.name !== a.name);
  };

  getAll(): Observable<Animals[]> {
    return this.http.get<Animals[]>(this.apiUrl);
  }

  getItem(id: number): Observable<Animals> {
    return this.http.get<Animals>(`${this.apiUrl}/${id}`)
  }
};
