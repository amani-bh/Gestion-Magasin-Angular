import { Component, OnInit } from '@angular/core';
import { PanierService } from 'src/app/services/PanierService/panier.service';
import { render } from 'creditcardpayments/creditCardPayments';
import { Router } from '@angular/router';
import { FactureService } from 'src/app/services/FactureService/facture.service';
import { DetailFactureService } from 'src/app/services/DetailFactureService/detail-facture.service';

@Component({
  selector: 'app-detail-panier',
  templateUrl: './detail-panier.component.html',
  styleUrls: ['./detail-panier.component.css']
})
export class DetailPanierComponent implements OnInit {
  panier: any;
  total = "";
  show: boolean = false;
  f: any;
  facture: any
  //df:any;
  df: object = {
    qte: "1",
    pourcentageRemise: "5"
  }
  constructor(private route:Router,private service: PanierService, private factureService: FactureService, private dfService: DetailFactureService) {

  }

  ngOnInit(): void {

    this.service.getPanier(1).subscribe(
      (d) => {
        if (d == null) {
          console.log("panier vide")
        }
        else {
          this.panier = d;
          this.total = this.panier["total"];
          console.log(this.panier["total"])
        }

      }

    );
    render({
      id: "#myPaypalButtons",
      currency: "USD",
      value: "100.00",
      onApprove: (details) => {
        alert('Transaction Successful');
        //this.route.navigateByUrl('Facture');
        this.factureService.addFacture(1).subscribe(
          (d) => {
            this.facture = d;
            for (let i of this.panier['listProduit']) {
              this.dfService.addDetailFacture(this.df, i['idProduit'], this.facture['idFacture']).subscribe(
                () => {
                  console.log(i['idProduit'])
                  this.service.removePanier(this.panier['idPanier'], i['idProduit']).subscribe(
                    () => {
                      console.log("vider panier")
                    }
                  )
                }
              );
            }
            this.factureService.calculerFacture(this.facture['idFacture'], 1).subscribe(
              () => {
                this.route.navigateByUrl('listeFactures')
                console.log("calcule")
              }
            );

          }
        );
        this.show = true;
      }


    });
  }

  remove(idPa: any, idPr: any) {
    this.service.removePanier(idPa, idPr).subscribe(
      () => {
        this.ngOnInit();
      }
    );
  }
}
