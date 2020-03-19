import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
// import 'rxjs/add/observable/throw';

@Injectable({
     providedIn: 'root'
})
export class UserService {
     constructor(private http: HttpClient) {}

     getUser(username: string): Observable<any> {

          let headers = new HttpHeaders();
          headers = headers.append('Content-Type', 'application/json');
          headers = headers.append('Accept', 'application/json');
          const body = JSON.stringify({ username });

          return this.http.post<any>(`https://js-band-api.glitch.me/signin`, body, {
                    headers
               })
     }
}
