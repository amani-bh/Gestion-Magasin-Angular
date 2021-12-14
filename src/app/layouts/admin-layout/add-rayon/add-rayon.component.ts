import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProduitService } from 'src/app/services/ProduitService/produit.service';
import { RayonService } from 'src/app/services/RayonService/rayon.service';

@Component({
  selector: 'app-add-rayon',
  templateUrl: './add-rayon.component.html',
  styleUrls: [
    '../../../../assets/back/vendors/feather/feather.css',
    '../../../../assets/back/vendors/ti-icons/css/themify-icons.css',
    '../../../../assets/back/vendors/css/vendor.bundle.base.css',
    '../../../../assets/back/css/vertical-layout-light/style.css'
  ]
})
export class AddRayonComponent implements OnInit {
  @Output() notif=new EventEmitter<any>();
  listR:any;
  show: boolean = false;

  f=this.fb.group({
    code:['',Validators.required],
    libelle:['',Validators.required]
  });
  constructor(private fb:FormBuilder,private service:RayonService,private serviceProduit:ProduitService) { }
  @Input() idRayon:any;
  ngOnInit(): void {
    this.service.listeRayons().subscribe(
      (d) => {
        this.listR = d;
      }
    );
    console.log(this.listR);
  }

  showForm() {
    this.show=!this.show;
  }

  ajouter(f: any) {
    console.log(f);
    this.service.addRayon(f).subscribe(
      (d)=>{
         
    this.notif.emit(d);
       },
       (error)=>{
         console.log(error.stattus);
       },
       ()=>{
         console.log('Rayon added successfully !');
       }
    );
    console.log(this.show);

    //console.log(rayon)
    //this.notif.emit(rayon)

}
}