import { Component, Input, OnInit } from '@angular/core';
import { StockService } from 'src/app/services/StockService/stock.service';

@Component({
  selector: 'app-update-stock',
  templateUrl: './update-stock.component.html',
  styleUrls: [
    '../../../../assets/back/vendors/feather/feather.css',
    '../../../../assets/back/vendors/ti-icons/css/themify-icons.css',
    '../../../../assets/back/vendors/css/vendor.bundle.base.css',
    '../../../../assets/back/css/vertical-layout-light/style.css'
  ]
})
export class UpdateStockComponent implements OnInit {
  //list:any=[];
  //Stock:any=[];
  //show2:boolean=false;
  @Input() stock:any;
  constructor(private service:StockService) { }

  ngOnInit(): void {
  }
  //showForm2(i:any){
  //  this.show2=!this.show2;
  //  this.Stock=this.list[i];
    //console.log(this.Stock);
  //}
  //modifierStock(d:any){
  //  this.show2=!this.show2;
   
  //}
  modifierStock(d: any) {
    
    console.log(d);
    this.service.updateStock(d).subscribe(
      (d)=>{
         this.ngOnInit();
       },
       (error)=>{
         console.log(error.stattus);
       },
       ()=>{
         console.log('update stock successfully');
       }
    );
  }
}
