import { Component, OnInit } from '@angular/core';
import { PanierService } from 'src/app/services/PanierService/panier.service';
import { ProduitService } from 'src/app/services/ProduitService/produit.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listProduits: any = [];
  constructor(private serviceProduit: ProduitService, private servicePanier: PanierService) { }

  ngOnInit(): void {
    this.serviceProduit.listeProduits().subscribe(
      (d) => {
        this.listProduits = d;
        console.log(this.listProduits);
      }
    );
  }
  updatePanier(idPanier: any, idProduit: any) {
    this.servicePanier.updatePanier(idPanier, idProduit).subscribe(
      () => {
        this.ngOnInit();
      }
    );
  }
}
