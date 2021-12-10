import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  baseUrl=environment.url;
  constructor(private http: HttpClient) { }
  listeProduits(){
    return this.http.get(this.baseUrl+"Produit/retrieve-all-Produits");
  }
  getProduit(id:number){
    return this.http.get(this.baseUrl+"Produit/retrieve-produit/"+id);
  }
  deleteProduit(id:number){
    return this.http.delete(this.baseUrl+"Produit/remove-produit/"+id);
  }
  addProduit(data:any,d:number,d2:number){
    return this.http.post(this.baseUrl+'Produit/add-produit/'+d+'/'+d2,data);
  }
  updateProduit(data:any,d:number,d2:number){
    return this.http.put(this.baseUrl+"Produit/modify-produit/"+d+'/'+d2,data);
  }
}
