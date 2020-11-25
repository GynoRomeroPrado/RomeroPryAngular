import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiRestService {
  urlPost = 'https://jsonplaceholder.typicode.com/posts';
  urlCountry = 'https://restcountries.eu/rest/v2/all';  
  urlPeru = 'https://restcountries.eu/rest/v2/name/peru?fullText=true';
  constructor(private httpClient: HttpClient) { }
  
  getPost(): Observable<any>{
    return this.httpClient.get(this.urlPost);
  }
  
  getCountry(): Observable<any>{
    return this.httpClient.get(this.urlCountry);
  }

  getPeru(): Observable<any>{
    return this.httpClient.get(this.urlPeru);
  }
  
}
