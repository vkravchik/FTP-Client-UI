import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  url = 'https://herokudjangoappftp.herokuapp.com/api/connections';
  // url = 'http://localhost:8000/api/connections/';

  constructor(private http: HttpClient) { }

  getConn(): Observable<any> {
    return this.http.get(`${this.url}`);
  }

  addConn(conn): Observable<any> {
    return this.http.post(`${this.url}/`, conn);
  }

  editConn(conn): Observable<any> {
    return this.http.put(`${this.url}/${conn.id}`, conn);
  }

  deleteConn(conn): Observable<any> {
    return this.http.delete(`${this.url}/${conn.id}`);
  }
}
