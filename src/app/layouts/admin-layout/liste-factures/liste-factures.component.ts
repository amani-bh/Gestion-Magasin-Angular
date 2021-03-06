import { Component, Input, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/ClientService/client.service';
import { FactureService } from 'src/app/services/FactureService/facture.service';

@Component({
  selector: 'app-liste-factures',
  templateUrl: './liste-factures.component.html',
  styleUrls: [
    '../../../../assets/back/vendors/feather/feather.css',
    '../../../../assets/back/vendors/ti-icons/css/themify-icons.css',
    '../../../../assets/back/vendors/css/vendor.bundle.base.css',
    '../../../../assets/back/css/vertical-layout-light/style.css'
  ]
})
export class ListeFacturesComponent implements OnInit {

  list:any=[];
  listClient:any=[];
  show:boolean=false;
  showListDf:boolean=false;
  id:any;
  row:any;
  constructor(private service:FactureService,private serviceClient:ClientService) { }

  ngOnInit(): void {
    this.service.listeFactures().subscribe(
      (d) => {
        this.list=d;
        console.log(d)
      }
      );
      this.serviceClient.listeClients().subscribe(
        (d)=>this.listClient=d
      )
  }
showForm(){
  if(this.show==false){
    this.show=true;
    this.showListDf=false
  }
else this.show=false;
}
ajouter(f:any){
this.service.addFacture(f).subscribe(
  (d)=>this.ngOnInit()
)
}
showDetailF(f:any, i:any){
  if(this.showListDf==false){
    this.showListDf=true;
    this.row=i;
    this.show=false;
  }
else this.showListDf=false;
  console.log(f)
  this.id=f['idFacture'];
}
}
