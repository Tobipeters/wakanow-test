import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  baseUrl: string = 'https://reqres.in/api';

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/users`);
  }

  getSingleUser(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/users/${id}`);
  }

  updateUser(data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/users/${data.id}`, data);
  }

  deleteUser(id: number): Observable<any> {
    return this.http
      .delete(`${this.baseUrl}/users/${id}`, { observe: 'response' })
      .pipe(map((response: HttpResponse<any>) => response.status));
  }
}
