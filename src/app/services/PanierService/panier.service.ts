import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  baseUrl=environment.url;
  constructor(private http: HttpClient) { }
  getPanier(id:number){
    return this.http.get(this.baseUrl+"panier/retrieve-panier/"+id);
  }
  addPanier(id:any){
    return this.http.post(this.baseUrl+'panier/'+id,null);
}
removePanier(idPanier:any,idProduit:any){
  return this.http.delete(this.baseUrl+"panier/remove-from-panier/"+idPanier+"/"+idProduit)
}
updatePanier(idPanier:any,idProduit:any){
  return this.http.put(this.baseUrl+"panier/modify-panier/"+idPanier+"/"+idProduit,null)
}
}
