import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FournisseurService } from 'src/app/services/FournisseurService/fournisseur.service';

@Component({
  selector: 'app-add-fournisseur',
  templateUrl: './add-fournisseur.component.html',
  styleUrls: [
    '../../../../assets/back/vendors/feather/feather.css',
    '../../../../assets/back/vendors/ti-icons/css/themify-icons.css',
    '../../../../assets/back/vendors/css/vendor.bundle.base.css',
    '../../../../assets/back/css/vertical-layout-light/style.css'
  ]
})
export class AddFournisseurComponent implements OnInit {
  
  @Output() notif=new EventEmitter<any>();

  constructor(private service:FournisseurService) { }

  ngOnInit(): void {
  }

  ajouter(f:any){
   this.service.addFournisseur(f).subscribe(
  (d)=>{
    //console.log('good');
     //this.ngOnInit();
     this.notif.emit(d);
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
