import { Component, Input, OnInit } from '@angular/core';
import { DetailFactureService } from 'src/app/services/DetailFactureService/detail-facture.service';
import { FactureService } from 'src/app/services/FactureService/facture.service';

@Component({
  selector: 'app-detail-of-one-facture',
  templateUrl: './detail-of-one-facture.component.html',
  styleUrls: [
    '../../../../assets/back/vendors/feather/feather.css',
    '../../../../assets/back/vendors/ti-icons/css/themify-icons.css',
    '../../../../assets/back/vendors/css/vendor.bundle.base.css',
    '../../../../assets/back/css/vertical-layout-light/style.css'
  ]
})
export class DetailOfOneFactureComponent implements OnInit {
  @Input() idDF !: any;
  list: any = [];
  nb = "3em"
  show: boolean = false;
  showADF: boolean = false;
  dFacture:any;
  facture:any;
  constructor(private service: DetailFactureService, private serviceFacture: FactureService) { }

  ngOnInit(): void {
    this.serviceFacture.getFacture(this.idDF).subscribe(
      (d)=>this.facture=d
    )
    this.service.listeDfByIdFacture(this.idDF).subscribe(
      (d) => {
        this.list = d;
      }
    );
  }
  deleteDFacture(id: any) {
    this.service.deleteDetailFacture(id).subscribe(
      () => this.ngOnInit()
        //idClient
      /*  this.serviceFacture.calculerFacture(this.idDF, this.facture['client']['idClient']).subscribe(
          () => this.ngOnInit(),
          (error)=>console.log(error)
        );
      }*/
    );
  }

  showUpdateForm(dp:any){
    this.show=!this.show;
    this.dFacture=dp;
  }
  showFormAddDF(){
    this.showADF=!this.showADF;
  }

  afterRecieveData(i:any){
    this.list.push(i);
    }
    afterRecieveDataUpdate(i:any){
      this.ngOnInit()
      }
}
