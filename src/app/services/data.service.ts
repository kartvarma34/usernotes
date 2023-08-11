import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any>{
    return this.http.get('http://localhost:3000/users')
  }

  login(): Observable<any>{
    return this.http.get('http://localhost:3000/users');
  }

  getNotes(): Observable<any>{
    return this.http.get('http://localhost:3000/notes');
  }

  addNote(note: any): Observable<any>{
    return this.http.post('http://localhost:3000/notes', note);
  }
}
