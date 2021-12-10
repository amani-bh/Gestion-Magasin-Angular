import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DetailFactureService } from 'src/app/services/DetailFactureService/detail-facture.service';
import { ProduitService } from 'src/app/services/ProduitService/produit.service';

@Component({
  selector: 'app-update-detail-produit',
  templateUrl: './update-detail-produit.component.html',
  styleUrls: [
    '../../../../assets/back/vendors/feather/feather.css',
    '../../../../assets/back/vendors/ti-icons/css/themify-icons.css',
    '../../../../assets/back/vendors/css/vendor.bundle.base.css',
    '../../../../assets/back/css/vertical-layout-light/style.css'
  ]
})
export class UpdateDetailProduitComponent implements OnInit {
@Input() dFacture:any;
@Input() idDf !: any;
listP:any;
formulaire=new FormGroup({
  idDetailFacture: new FormControl(),
  produit: new FormControl('',[Validators.required, Validators.email] ),
  qte: new FormControl('', Validators.required),
  pourcentageRemise:new FormControl('', Validators.required),
 } );
  constructor(private service:DetailFactureService,private serviceProduit:ProduitService) { }

  ngOnInit(): void {
    this.serviceProduit.listeProduits().subscribe(
      (d)=>{
        this.listP=d;
      }
    )
    console.log(this.dFacture);
    this.formulaire.setValue(this.dFacture);
  }
  
  getidDetailFacture(){
    return this.dFacture['idDetailFacture'];
  }
  getproduit(){
    return this.formulaire.get('produit');
  }
  getqte(){
    return this.formulaire.get('qte');
  }
  getpourcentageRemise(){
    return this.formulaire.get('pourcentageRemise');
  }
  
update(dp:any){
  console.log(dp)
  this.service.updateDetailFacture(dp,this.idDf).subscribe(
    ()=>{
      console.log("update")
    }
  );
}
}
