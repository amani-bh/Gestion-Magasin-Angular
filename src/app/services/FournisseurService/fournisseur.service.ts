import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {
  baseUrl=environment.url;
  constructor(private http: HttpClient) { }
  listeFournisseurs(){
    return this.http.get(this.baseUrl+"fournisseur/retrieve-all-fournisseurs");
  }
  getFournisseur(id:number){
    return this.http.get(this.baseUrl+"retrieve-fournisseur/"+id);
  }
  deleteFournisseur(id:number){
    return this.http.get(this.baseUrl+"fournisseur/remove-fournisseur/"+id);
  }
  addFournisseur(data:any){
    return this.http.post(this.baseUrl+"fournisseur/add-fournisseur",data);
  }
}
