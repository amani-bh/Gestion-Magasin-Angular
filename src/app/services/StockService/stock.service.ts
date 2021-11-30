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
  getstock(idStock: number) {
    return this.http.get(this.baseUrl + "stock/retrieve-stock/" + idStock);
  }

}