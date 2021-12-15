import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/JwtClient/token-storage.service';
import { PanierService } from 'src/app/services/PanierService/panier.service';
import { ProduitService } from 'src/app/services/ProduitService/produit.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listProduits: any = [];
  idP:any;
  constructor(private serviceProduit: ProduitService, private servicePanier: PanierService,private user:TokenStorageService) { }

  ngOnInit(): void {
    this.servicePanier.getPanier(this.user.getUser()['id']).subscribe(
     (d)=> this.idP=d

    )
    this.serviceProduit.listeProduits().subscribe(
      (d) => {
        this.listProduits = d;
        console.log(this.listProduits);
      }
    );
  }
  updatePanier(idPanier: any, idProduit: any) {
    this.servicePanier.updatePanier(this.idP['idPanier'], idProduit).subscribe(
      () => {
        this.ngOnInit();
      }
    );
  }
}
