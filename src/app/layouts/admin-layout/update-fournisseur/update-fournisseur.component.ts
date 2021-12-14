import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FournisseurService } from 'src/app/services/FournisseurService/fournisseur.service';

@Component({
  selector: 'app-update-fournisseur',
  templateUrl: './update-fournisseur.component.html',
  styleUrls: [ '../../../../assets/back/vendors/feather/feather.css',
  '../../../../assets/back/vendors/ti-icons/css/themify-icons.css',
  '../../../../assets/back/vendors/css/vendor.bundle.base.css',
  '../../../../assets/back/css/vertical-layout-light/style.css']
})
export class UpdateFournisseurComponent implements OnInit {
  @Output() notifUp=new EventEmitter<any>();
  @Input() F !: any;
Fournisseur:any;
formulaire=new FormGroup({
  idFournisseur: new FormControl(),
  code: new FormControl('', [Validators.required, Validators.minLength(3)] ),
libelle: new FormControl('', [Validators.required])
 } );
  constructor(private service:FournisseurService) { }

  ngOnInit(): void {
    console.log(this.F);
    this.formulaire.setValue(this.F)
  }
  get idFournisseur(){
    return this.F['idFournisseur'];
  } 

  get code(){
    return this.formulaire.get('code');
  }
  get libelle(){
    return this.formulaire.get('libelle');
  } 

  update(d:any){
    this.service.updateFournisseur(d).subscribe(
      (d)=>{
        
       this.notifUp.emit(d);
       }
    );
  }

}
