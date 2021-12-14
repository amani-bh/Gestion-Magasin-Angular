import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FactureService {
  baseUrl=environment.url;
  constructor(private http: HttpClient) { }
  listeFactures(){
    return this.http.get(this.baseUrl+"facture/retrieve-all-factures");
  }
  getFacture(id:number){
    return this.http.get(this.baseUrl+"facture/retrieve-facture/"+id);
  }
  addFacture(idC:any){
    return this.http.post(this.baseUrl+'facture/add/'+idC,null);
}
calculerFacture(idF:any,idC:any){
  return this.http.post(this.baseUrl+'facture/add-facture/'+idF+"/"+idC,null)
}
listFacturesByClient(id:any){
  return this.http.get(this.baseUrl+"facture/retrieve-factures-client/"+id);
}
pdfReport(id: any) {
  const headers = new HttpHeaders();
  return this.http.get(this.baseUrl+"facture/report/" + id, {
    responseType: "blob"
  });
}
}
