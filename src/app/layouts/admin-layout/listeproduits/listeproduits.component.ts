import { Component, OnInit } from '@angular/core';
import { ProduitService } from 'src/app/services/ProduitService/produit.service';

@Component({
  selector: 'app-listeproduits',
  templateUrl: './listeproduits.component.html',
  styleUrls: [ '../../../../assets/back/vendors/feather/feather.css',
  '../../../../assets/back/vendors/ti-icons/css/themify-icons.css',
  '../../../../assets/back/vendors/css/vendor.bundle.base.css',
  '../../../../assets/back/css/vertical-layout-light/style.css'
]
})
export class ListeproduitsComponent implements OnInit {
listeProduits : any=[]
showUpdate:boolean=false;
p:any;
  constructor(private produitService:ProduitService) {

   }

  ngOnInit(): void {
    this.produitService.listeProduits().subscribe( (d)=>
    {
      this.listeProduits=d;
    }
    )
   
  }

  showFormUpdate(produit:any){
    this.p=produit;
    this.showUpdate=!this.showUpdate;
  }

  deleteProduit(id:any){
    this.produitService.deleteProduit(id).subscribe(
      ()=>this.ngOnInit()
    )
  }

}
