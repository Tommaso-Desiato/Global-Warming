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

  getCo2(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/co2-api`);
  };

  getMethane(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/methane-api`);
  };

  getNo2(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/nitrous-oxide-api`);
  };

  getArctic(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/arctic-api`);
  }
  
}
