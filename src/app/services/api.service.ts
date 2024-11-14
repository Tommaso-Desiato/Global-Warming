import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http: HttpClient) { }

  baseUrl = 'https://global-warming.org/api';

  getTemperature(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/temperature-api`);
  };
}
