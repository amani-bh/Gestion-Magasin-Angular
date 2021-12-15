import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RayonService } from 'src/app/services/RayonService/rayon.service';

@Component({
  selector: 'app-update-rayon',
  templateUrl: './update-rayon.component.html',
  styleUrls: [
    '../../../../assets/back/vendors/feather/feather.css',
    '../../../../assets/back/vendors/ti-icons/css/themify-icons.css',
    '../../../../assets/back/vendors/css/vendor.bundle.base.css',
    '../../../../assets/back/css/vertical-layout-light/style.css'
  ]
})
export class UpdateRayonComponent implements OnInit {
  @Input() rayon:any;
  @Input() idR !: any;
  @Output() notifUp=new EventEmitter<any>();
  listR:any;
  formulaire=new FormGroup({
    idRayon: new FormControl(),
    code: new FormControl('',[Validators.required] ),
    libelle: new FormControl('', Validators.required)
   } );
  constructor(private service:RayonService) { }

  ngOnInit(): void {
    this.service.listeRayons().subscribe(
      (d)=>{
        this.listR=d;
      }
    )
    console.log(this.rayon);
    this.formulaire.setValue(this.rayon);
  }

  update(dp:any){
    console.log(dp)
    this.service.updateRayon(dp).subscribe(
      (dp)=>{
         //this.ngOnInit();
         this.notifUp.emit(dp);
       },
       (error)=>{
         console.log(error.stattus);
       },
       ()=>{
         console.log('update rayon successfully');
       }
    );
  }

}