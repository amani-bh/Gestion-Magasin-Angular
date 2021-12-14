import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PanierService } from 'src/app/services/PanierService/panier.service';
import { ProduitService } from 'src/app/services/ProduitService/produit.service';

@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.css']
})
export class ListProduitComponent implements OnInit {
list:any=[];
  constructor(private service:ProduitService,private activatedroute:ActivatedRoute, private servicePanier: PanierService) { }

  ngOnInit(): void {
    this.service.getProduitByCategorie(this.activatedroute.snapshot.params['cat']).subscribe(
      (d)=>{
        console.log(d)
        this.list=d;
      }
    )
  }

}
