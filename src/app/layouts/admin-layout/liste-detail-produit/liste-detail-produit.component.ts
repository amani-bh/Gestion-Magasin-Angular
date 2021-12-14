import { Component, OnInit } from '@angular/core';
import { DetailProduitService } from 'src/app/services/DetailProduitService/detail-produit.service';

@Component({
  selector: 'app-liste-detail-produit',
  templateUrl: './liste-detail-produit.component.html',
  styleUrls: ['../../../../assets/back/vendors/feather/feather.css',
  '../../../../assets/back/vendors/ti-icons/css/themify-icons.css',
  '../../../../assets/back/vendors/css/vendor.bundle.base.css',
  '../../../../assets/back/css/vertical-layout-light/style.css']
})
export class ListeDetailProduitComponent implements OnInit {

  listeDetailProduits : any=[]
  showUpdate:boolean=false;
  dp:any;
    constructor(private detailProduitService:DetailProduitService) {
  
     }
  
    ngOnInit(): void {
      this.detailProduitService.listedetailProduits().subscribe( (d)=>
      {
        this.listeDetailProduits=d;
      }
      )
     
    }
  
    showFormUpdate(detailproduit:any){
      this.dp=detailproduit;
      this.showUpdate=!this.showUpdate;
    }
  
    deleteDetailProduit(id:any){
      this.detailProduitService.deletedetailProduit(id).subscribe(
        ()=>this.ngOnInit()
      )
    }

}
