import { Component, OnInit } from '@angular/core';
import { StockService } from 'src/app/services/StockService/stock.service';

@Component({
  selector: 'app-liste-stocks',
  templateUrl: './liste-stocks.component.html',
  styleUrls: [
    '../../../../assets/back/vendors/feather/feather.css',
    '../../../../assets/back/vendors/ti-icons/css/themify-icons.css',
    '../../../../assets/back/vendors/css/vendor.bundle.base.css',
    '../../../../assets/back/css/vertical-layout-light/style.css'
  ]
})
export class ListeStocksComponent implements OnInit {
  list: any = [];
  show: boolean = false;
  constructor(private service: StockService) { }

  ngOnInit(): void {
    this.service.listeStocks().subscribe(
      (d) => {
        this.list = d;
      }
    );
  }
  showForm() {
    if (this.show == false) {
      this.show = true;
    }
    else this.show = false;
  }
  ajouter(f: any) {
    console.log(f);
    this.service.addStock(f).subscribe(
      (d)=>{
        //console.log('good');
         this.ngOnInit();
       },
       (error)=>{
         console.log(error.stattus);
       },
       ()=>{
         console.log('complete');
       }
    );
    }
}