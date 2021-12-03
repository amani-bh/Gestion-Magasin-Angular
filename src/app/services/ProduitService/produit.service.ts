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
}
