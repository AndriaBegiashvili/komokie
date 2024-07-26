import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import  {HttpClient} from "@angular/common/http";

@Injectable()
export class ApiServiceService {

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`https://jsonplaceholder.typicode.com/users`);
  }
  getUser(id:number): Observable<any> {
    return this.http.get<any[]>(`https://jsonplaceholder.typicode.com/users?id=${id}`);
  }
  getPosts(id?:any): Observable<any[]> {
    const url = isNaN(id) ? 'https://jsonplaceholder.typicode.com/posts' : `https://jsonplaceholder.typicode.com/posts?userId=${id}`
    return this.http.get<any[]>(url);
  }
}
