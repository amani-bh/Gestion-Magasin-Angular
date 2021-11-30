import { Component, OnInit } from '@angular/core';
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
  show:boolean=false;
  constructor(private service:FactureService) { }

  ngOnInit(): void {
    this.service.listeFactures().subscribe(
      (d) => {
        this.list=d;
      }
      );
  }
showForm(){
  if(this.show==false){
    this.show=true;
  }
else this.show=false;
}
ajouter(f:any){
console.log(f);
}
}
