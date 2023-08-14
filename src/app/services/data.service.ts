import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // private users = [
  //   { username: 'asdasd', password: 'asdasd' },
  //   { username: '', password: '' }
  // ];

  private usersUrl = 'http://localhost:3000/users';
  constructor(private http: HttpClient) { }

  getUsers(): Observable<any>{
    return this.http.get('http://localhost:3000/users')
  }

  // login(username: string, password: string): boolean{
  //   const user = this.users.find(u=>u.username === username && u.password === password)
  //   // return this.http.get('http://localhost:3000/users');
  //   return user !== undefined;
  // }

  login(username: string, password: string): Observable<any>{
    return this.http.get<any[]>(`${this.usersUrl}?username=${username}&password=${password}`);
  }

  getNotes(): Observable<any>{
    return this.http.get('http://localhost:3000/notes');
  }

  addNote(note: any): Observable<any>{
    return this.http.post('http://localhost:3000/notes', note);
  }

  addUser(user: any): Observable<any>{
    return this.http.post('http://localhost:3000/users', user);
  }

  delNote(noteID: any): Observable<any>{
    const apiURL = 'http://localhost:3000/notes'
    const url = `${apiURL}/${noteID}`
    return this.http.delete(url);
  }
}
