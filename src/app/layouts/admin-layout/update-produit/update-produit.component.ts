import { Component, Input, OnInit } from '@angular/core';
import { ProduitService } from 'src/app/services/ProduitService/produit.service';

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styleUrls:[
    '../../../../assets/back/vendors/feather/feather.css',
    '../../../../assets/back/vendors/ti-icons/css/themify-icons.css',
    '../../../../assets/back/vendors/css/vendor.bundle.base.css',
    '../../../../assets/back/css/vertical-layout-light/style.css'
  ]
})
export class UpdateProduitComponent implements OnInit {
@Input() produit:any
  constructor(private serviceProduit:ProduitService) {
   }

  ngOnInit(): void {
  }
modifier (p:any){
  this.serviceProduit.updateProduit(p,1,1).subscribe(
    ()=>this.ngOnInit()
  );
}
}
