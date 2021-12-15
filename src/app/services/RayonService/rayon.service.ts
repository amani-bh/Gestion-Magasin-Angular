import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RayonService {
  baseUrl = environment.url;
  constructor(private http: HttpClient) { }
  listeRayons() {
    return this.http.get(this.baseUrl + "rayon/retrieve-all-rayons/");
  }
  getRayon(idRayon: number) {
    return this.http.get(this.baseUrl + "rayon/retrieve-rayon/" + idRayon);
  }
  addRayon(data:any){
    return this.http.post(this.baseUrl+'rayon/add-rayon/',data);
  }
  updateRayon(data:any){
    return this.http.put(this.baseUrl+"rayon/modify-rayon",data);
  }
  deleteRayon(id:number){
    return this.http.delete(this.baseUrl+"rayon/remove-rayon/"+id);
  }
  getRayonByProduit(idProduit: any) {
    return this.http.get(this.baseUrl + "rayon/rayon-produit/"+idProduit);
  }

  getListesProduitsByIdRayon(idRayon: any){
    return this.http.get(this.baseUrl + "rayon/produits-id-rayon/"+idRayon);
  }
}