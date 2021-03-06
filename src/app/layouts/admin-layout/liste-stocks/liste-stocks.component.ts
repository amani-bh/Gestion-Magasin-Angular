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
  //stock:any=[];
  show: boolean = false;
  show2:boolean=false;
  s:any;
  listStockWarn:any=[];
  constructor(private service: StockService) { }

  ngOnInit(): void {
    this.service.listeStocks().subscribe(
      (d) => {
        this.list = d;
      }
    );
    
    this.service.warnStock().subscribe(
      (d)=>{
        console.log(d)
        this.listStockWarn=d;
        if(this.listStockWarn.length>0){
          alert(this.listStockWarn.length +" stock(s) ont une quantite insuffisante !")
        }
    }
    )
    console.log(this.listStockWarn);
  }
  showForm() {
    this.show=!this.show;
  }
  showFormUpdate(i:any){
    this.show2=!this.show2;
    this.s=i;
   // this.stock=this.list[i];
    
  }
  ajouter(f: any) {
    console.log(f);
    this.service.addStock(f).subscribe(
      (d)=>{
         this.ngOnInit();
       },
       (error)=>{
         console.log(error.stattus);
       },
       ()=>{
         console.log('Stock added successfully !');
       }
    );
    console.log(this.show);
    
}



delete(i:any){
  console.log(i)
  this.service.deleteStock(i).subscribe(
    (d)=>{
       this.ngOnInit();
     },
     (error)=>{
       console.log(error.stattus);
     },
     ()=>{
       console.log('delete stock successfully');
     }
  );
}
}