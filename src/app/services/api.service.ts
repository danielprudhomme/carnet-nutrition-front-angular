import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  get(url: string, queryParams: any = null): Observable<any> {
    if (queryParams) {
      let queryStrings: string[] = [];
      for (let key in queryParams) {
        queryStrings.push(`${key}=${queryParams[key]}`);
      }
      url += `?${queryStrings.join('&')}`;
    }
    return this.http.get(`${this.baseUrl}/${url}`);
  }

  put(url: string, body: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${url}`, body);
  }

  post(url: string, body: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/${url}`, body);
  }

  delete(url: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${url}`);
  }
}
