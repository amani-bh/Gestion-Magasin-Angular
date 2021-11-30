import { Component, OnInit } from '@angular/core';
import { StockService } from 'src/app/services/StockService/stock.service';

@Component({
  selector: 'app-liste-stocks',
  templateUrl: './liste-stocks.component.html',
  styleUrls: ['./liste-stocks.component.css']
})
export class ListeStocksComponent implements OnInit {
  list: any = [];
  constructor(private service: StockService) { }

  ngOnInit(): void {
    this.service.listeStocks().subscribe(
      (d) => {
        this.list = d;
      }
    );
  }

}