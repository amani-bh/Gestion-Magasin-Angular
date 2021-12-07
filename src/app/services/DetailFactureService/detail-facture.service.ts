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
  listeDetailFacture(){
    return this.http.get(this.baseUrl+"/detailFacture/retrieve-all-detailFactures");
  }
  addDetailFacture(data:any,idP:any,idF:any){
    return this.http.post(this.baseUrl+'detailFacture/add-detailfacture/'+idP+'/'+idF,data);
}
}
