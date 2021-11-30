import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  baseUrl=environment.url;
  constructor(private http: HttpClient) { }
  listeClients(){
    return this.http.get(this.baseUrl+"client/retrieve-all-clients");
  }
  getClient(id:number){
    return this.http.get(this.baseUrl+"client/retrieve-client/"+id);
  }
  deleteClient(id:number){
    return this.http.get(this.baseUrl+"client/remove-client/"+id);
  }
  addClient(data:any){
    return this.http.post(this.baseUrl+"client/add-client",data);
  }
}
