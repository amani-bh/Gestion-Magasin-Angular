import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DetailFactureService } from 'src/app/services/DetailFactureService/detail-facture.service';
import { FactureService } from 'src/app/services/FactureService/facture.service';
import { ProduitService } from 'src/app/services/ProduitService/produit.service';

@Component({
  selector: 'app-add-detail-facture',
  templateUrl: './add-detail-facture.component.html',
  styleUrls: [
    '../../../../assets/back/vendors/feather/feather.css',
    '../../../../assets/back/vendors/ti-icons/css/themify-icons.css',
    '../../../../assets/back/vendors/css/vendor.bundle.base.css',
    '../../../../assets/back/css/vertical-layout-light/style.css'
  ]
})
export class AddDetailFactureComponent implements OnInit {
  @Output() notif=new EventEmitter<any>();
  listP:any;
  produit:any;
  detail:any;
  facture:any;
  f=this.fb.group({
    produit:['',Validators.required],
    qte:['',[Validators.required,Validators.pattern('[1-9]+$'),Validators.min(1)]],
    pourcentageRemise:['',[Validators.required,Validators.pattern('[0-9]+$'),Validators.min(0),Validators.max(100)]]
    
  });
  constructor(private fb:FormBuilder,private service:DetailFactureService,private serviceProduit:ProduitService, private serviceFacture: FactureService) { }
@Input() idFacture:any;
  ngOnInit(): void {
    this.serviceFacture.getFacture(this.idFacture).subscribe(
      (d)=>this.facture=d
    )
    this.serviceProduit.listeProduits().subscribe(
      (d)=>{
        this.listP=d;
      }
    )
  }
  get form(){
    return this.f.controls;

  }
  getproduit(){
    return this.f.get('produit')?.value ;
  }
  get qte(){
    return this.f.get('qte');
  }
  get pourcentageRemise(){
    return this.f.get('pourcentageRemise');
  }
  ajouter(df:any){
this.produit=this.getproduit();
    this.service.addDetailFacture(df,this.produit['idProduit'],this.idFacture).subscribe(
      (data)=>{
        this.detail=data;

       // this.serviceFacture.calculerFacture(this.idFacture, this.facture['client']['idClient']).subscribe(
        //  (d) =>{
            this.service.getDetailFacture(this.detail['idDetailFacture']).subscribe(
              (dfacture)=>{
                console.log(dfacture)
                this.notif.emit(dfacture)

              }
            )
           

         // } 
        //);
      }
    );
  }


}
