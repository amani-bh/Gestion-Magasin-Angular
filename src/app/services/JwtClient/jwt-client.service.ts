import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JwtClientService {
  baseUrl=environment.url;
  constructor(private http: HttpClient) { }
 public generateToken(request:any ){
  console.log(request);
  return this.http.post(this.baseUrl+"authenticate",request,{responseType:'text'as'json'});
 }
 public welcome(token:any) {
  let tokenStr = 'Bearer ' + token;
  console.log(tokenStr);
  const headers = new HttpHeaders().set('Authorization', tokenStr);
  return this.http.get<string>(this.baseUrl, {headers, responseType: 'text' as 'json' });
  
  
}
}
