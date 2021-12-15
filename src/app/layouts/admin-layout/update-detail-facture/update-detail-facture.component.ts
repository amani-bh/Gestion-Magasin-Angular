import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DetailFactureService } from 'src/app/services/DetailFactureService/detail-facture.service';
import { FactureService } from 'src/app/services/FactureService/facture.service';
import { ProduitService } from 'src/app/services/ProduitService/produit.service';

@Component({
  selector: 'app-update-detail-facture',
  templateUrl: './update-detail-facture.component.html',
  styleUrls: [
    '../../../../assets/back/vendors/feather/feather.css',
    '../../../../assets/back/vendors/ti-icons/css/themify-icons.css',
    '../../../../assets/back/vendors/css/vendor.bundle.base.css',
    '../../../../assets/back/css/vertical-layout-light/style.css'
  ]
})
export class UpdateDetailFactureComponent implements OnInit {
@Output() notifUp=new EventEmitter<any>();
@Output() updateNotif=new EventEmitter<any>();
@Input() dFacture:any;
@Input() idDf !: any;
listP:any;
facture:any;
formulaire=new FormGroup({
  idDetailFacture: new FormControl(),
  produit: new FormControl('',[Validators.required] ),
  qte: new FormControl('', Validators.required),
  pourcentageRemise:new FormControl('', Validators.required),
 } );
  constructor(private service:DetailFactureService,private serviceProduit:ProduitService, private serviceFacture: FactureService) { }

  ngOnInit(): void {
    this.serviceFacture.getFacture(this.idDf).subscribe(
      (d)=>this.facture=d
    )
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
    (d)=>{
      () => this.updateNotif.emit(d)
      console.log("update")
      //idClient
     /* this.serviceFacture.calculerFacture(this.idDf, this.facture['client']['idClient']).subscribe(
        
      );*/
    }
  );
}
}
