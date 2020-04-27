import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {

  }

  getUsers(): Observable<any> {
    return this.http.get('/api/users')
  }

  getPersonListById(params: any = {}): Observable<any> {
    return this.http.get('/api/users', {
      params: new HttpParams({
        fromObject: params
      })
    })
  }

  getLogUsers(params: any = {}): Observable<any> {
    return this.http.get('/api/users/log', {
      params: new HttpParams({
        fromObject: params
      })
    })
  }
}