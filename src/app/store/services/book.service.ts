import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Books } from 'src/app/models/books.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
     providedIn: 'root'
})

export class BookService {

     constructor(private http: HttpClient) {}

     getBookFetch(id): Observable<Books> {
          const dataUser = localStorage.getItem('user');

          const { token } = JSON.parse(dataUser);

          if (token) {
               let headers = new HttpHeaders();
               headers = headers.append('Authorization', `Bearer ${token}`);

               return this.http.get<Books>(`https://js-band-api.glitch.me/books/${id}`, {headers});
          }
     }
}
