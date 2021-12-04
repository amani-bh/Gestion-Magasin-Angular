import { Component, Input, OnInit } from '@angular/core';
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
  Fournisseur:any=[];
  show:boolean=false;
  show1:boolean=false;
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
  showForm1(i:any){
    this.show1=!this.show1;
    this.Fournisseur=this.list[i];
    console.log(this.Fournisseur);
    
  }
  ajouter(f:any){
    this.show=!this.show;
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
console.log(this.show);
}
  modifier(d:any){
    this.show1=!this.show1;
    console.log(d);
    this.service.updateFournisseur(d).subscribe(
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
  del(i:any){
    this.service.deleteFournisseur(this.list[i].idFournisseur).subscribe(
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
