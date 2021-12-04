import { Component, OnInit } from '@angular/core';
import { PanierService } from 'src/app/services/PanierService/panier.service';
import { render } from 'creditcardpayments/creditCardPayments';

@Component({
  selector: 'app-detail-panier',
  templateUrl: './detail-panier.component.html',
  styleUrls: ['./detail-panier.component.css']
})
export class DetailPanierComponent implements OnInit {
panier:any;
total="";
  constructor(private service:PanierService) { 
 
  }

  ngOnInit(): void {
    
    this.service.getPanier(1).subscribe(
      (d) => {
        if (d == null) {
          console.log("panier vide")
        }
        else {
          this.panier = d;
          this.total=this.panier["total"];
    console.log(this.panier["total"])
        }

      }

    );
    render({
      id:"#myPaypalButtons",
      currency:"USD",
      value:"100.00",
      onApprove:(details)=>{
        alert('Transaction Successful');
      }

      
    });
  }

  remove(idPa: any, idPr: any) {
    this.service.removePanier(idPa, idPr).subscribe(
      ()=>{
        this.ngOnInit();
      }
    );
  }
}
