import { Component, OnInit } from '@angular/core';
import { DetailFactureService } from 'src/app/services/DetailFactureService/detail-facture.service';

@Component({
  selector: 'app-liste-detail-factures',
  templateUrl: './liste-detail-factures.component.html',
  styleUrls: [
    '../../../../assets/back/vendors/feather/feather.css',
    '../../../../assets/back/vendors/ti-icons/css/themify-icons.css',
    '../../../../assets/back/vendors/css/vendor.bundle.base.css',
    '../../../../assets/back/css/vertical-layout-light/style.css'
  ]
})
export class ListeDetailFacturesComponent implements OnInit {
  list:any=[];
  show:boolean=false;
  constructor(private service:DetailFactureService) { }

  ngOnInit(): void {
    this.service.listeDetailFacture().subscribe(
      (d)=>{
        this.list=d;
        console.log(this.list)
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
    this.service.addDetailFacture(f,5,1).subscribe(
      (d)=>{
        //console.log('good');
         this.ngOnInit();
       },
       (error)=>{
         console.log(error.stattus);
       },
       ()=>{
         console.log('complete');
       }
    );
    }
}
