import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DetailProduitService {
  baseUrl=environment.url;
  constructor(private http: HttpClient) { }
  listedetailProduits(){
    return this.http.get(this.baseUrl+"detailProduit/retrieve-all-detailProduits");
  }
  getdetailProduit(id:number){
    return this.http.get(this.baseUrl+"detailProduit/retrieve-detail-produit/"+id);
  }
  deletedetailProduit(id:number){
    return this.http.delete(this.baseUrl+"detailProduit/remove-dProduit/"+id);
  }
  //adddetailProduit(){
    //return this.http.post(this.baseUrl+"detailProduit/add-dProduit/");
  //}
 // updatedetailProduit(){
   // return this.http.put(this.baseUrl+"detailProduit/modify-dProduit");
  //}
}
