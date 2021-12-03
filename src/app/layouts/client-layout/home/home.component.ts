import { Component, OnInit } from '@angular/core';
import { ProduitService } from 'src/app/services/ProduitService/produit.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listProduits:any=[];
  constructor(private serviceProduit:ProduitService) { }

  ngOnInit(): void {
    this.serviceProduit.listeProduits().subscribe(
      (d)=>{
        this.listProduits=d;
        console.log(this.listProduits);
      }
    );
  }

}
