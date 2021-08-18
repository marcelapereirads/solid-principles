import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenericService {

  constructor(private http: HttpClient) { }

  post(params: any): Observable<any> {
    return this.http.post('https://reqres.in/api/users', params);
  }
}
