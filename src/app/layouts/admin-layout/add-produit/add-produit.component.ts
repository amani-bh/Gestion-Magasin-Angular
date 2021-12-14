import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DetailProduitService } from 'src/app/services/DetailProduitService/detail-produit.service';
import { ProduitService } from 'src/app/services/ProduitService/produit.service';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: [
     '../../../../assets/back/vendors/feather/feather.css',
  '../../../../assets/back/vendors/ti-icons/css/themify-icons.css',
  '../../../../assets/back/vendors/css/vendor.bundle.base.css',
  '../../../../assets/back/css/vertical-layout-light/style.css']
})
export class AddProduitComponent implements OnInit {
produit:any;
detail:any;
categorie:any;
p:any;
@Output() notif=new EventEmitter<any>();
  constructor(private service:ProduitService,private serviceDetail:DetailProduitService) { }

  ngOnInit(): void {
  }
add(f:any){
  console.log(f);
  /*this.produit['prixUnitaire']=f['prixUnitaire'];
  this.produit['code']=f['code'];
  this.produit['libelle']=f['libelle'];*/
  this.categorie=f['categorie']
  this.service.addProduit(f,1,1).subscribe(
    (d)=>{
this.p=d;
      this.detail=this.p['detailProduit'];
      this.detail['categorieProduit']=this.categorie;
      console.log(this.detail)
      this.serviceDetail.updatedetailProduit(this.detail).subscribe(
        (data)=>{
          this.notif.emit(d);
        }
      );

    }
  )


}
}
