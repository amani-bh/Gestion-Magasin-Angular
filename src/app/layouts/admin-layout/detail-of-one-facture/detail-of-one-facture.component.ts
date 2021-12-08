import { Component, Input, OnInit } from '@angular/core';
import { DetailFactureService } from 'src/app/services/DetailFactureService/detail-facture.service';

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
  list:any=[];
  nb="3em"
  constructor(private service:DetailFactureService) { }

  ngOnInit(): void {
    this.service.listeDfByIdFacture(this.idDF).subscribe(
      (d)=>{
        this.list=d;
      }
    );
  }

}
