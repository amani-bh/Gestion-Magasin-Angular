import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  baseUrl = environment.url;
  constructor(private http: HttpClient) { }
  listeStocks() {
    return this.http.get(this.baseUrl + "stock/retrieve-all-stocks");
  }
  getStock(idStock: number) {
    return this.http.get(this.baseUrl + "stock/retrieve-stock/" + idStock);
  }
  addStock(data:any){
    return this.http.post(this.baseUrl+'stock/add-stock/',data);
  }
  updateStock(data:any){
    return this.http.put(this.baseUrl+"stock/modify-stock",data);
  }
  deleteStock(id:number){
    return this.http.delete(this.baseUrl+"stock/remove-stock/"+id);
  }
  warnStock(){
    return this.http.get(this.baseUrl + "stock/notif-stock");
  }
}