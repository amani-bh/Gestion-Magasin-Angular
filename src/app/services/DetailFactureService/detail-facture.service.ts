import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DetailFactureService {
  baseUrl=environment.url;
  constructor(private http: HttpClient) { }
  dash(){
    return this.http.get(this.baseUrl+"dash-prix-date");
  }
}
