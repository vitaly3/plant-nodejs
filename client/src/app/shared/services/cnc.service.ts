import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Cnc, Department } from '../interfaces'

@Injectable({
  providedIn: 'root'
})
export class CncService {
  constructor(private http: HttpClient) {}

  fetch(): Observable<Cnc[]> {
    return this.http.get<Cnc[]>('/api/cnc')
  }

  fetchDepartments(): Observable<Department[]> {
    return this.http.get<Cnc[]>('/api/cnc/departments')
  }
  getCncByDepartmentId(id: string): Observable<Cnc[]> {
    return this.http.get<Cnc[]>(`/api/cnc/departments/${id}`)
  }

}