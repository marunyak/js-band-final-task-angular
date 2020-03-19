import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  getBooksFetch(): Observable<any>  {
    const dataUser = localStorage.getItem('user');
    const { token } = JSON.parse(dataUser);

    if (token) {

      let headers = new HttpHeaders();
      headers = headers.append('Content-Type', 'application/json');
      headers = headers.append('Accept', 'application/json');
      headers = headers.append('Authorization', `Bearer ${token}`);

      return this.http.get('https://js-band-api.glitch.me/books', {headers});
    }

  }
}
