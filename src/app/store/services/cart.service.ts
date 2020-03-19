import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
// import 'rxjs/add/observable/throw';

@Injectable({
     providedIn: 'root'
})
export class CartService {
     constructor(private http: HttpClient) {}

     addPurchase(obj: object): Observable<any> {

          const dataUser = localStorage.getItem('user');
          const { token } = JSON.parse(dataUser);
          const body = JSON.stringify(obj);

          if (token) {
            let headers = new HttpHeaders();
            headers = headers.append('Content-Type', 'application/json');
            headers = headers.append('Accept', 'application/json');
            headers = headers.append('Authorization', `Bearer ${token}`);
            return this.http.post<any>('https://js-band-api.glitch.me/purchase', body, {headers});
          }
     }
}
