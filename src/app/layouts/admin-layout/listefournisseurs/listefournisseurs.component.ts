import { Component, OnInit } from '@angular/core';
import { FournisseurService } from 'src/app/services/FournisseurService/fournisseur.service';
import { fournisseur } from './fournisseur';

@Component({
  selector: 'app-listefournisseurs',
  templateUrl: './listefournisseurs.component.html',
  styleUrls: [
    '../../../../assets/back/vendors/feather/feather.css',
    '../../../../assets/back/vendors/ti-icons/css/themify-icons.css',
    '../../../../assets/back/vendors/css/vendor.bundle.base.css',
    '../../../../assets/back/css/vertical-layout-light/style.css'
  ]
})
export class ListefournisseursComponent implements OnInit {
  list:any=[];
  show:boolean=false;
  forn!:fournisseur;
  constructor(private service:FournisseurService) { }

  ngOnInit(): void {
    this.service.listeFournisseurs().subscribe(
      (d) => {
        this.list=d;
      }
      );
      console.log(this.list);
  }
  showForm(){
    this.show=!this.show;
  }
  ajouter(f:any){

console.log(f);
this.service.addFournisseur(f).subscribe(
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
