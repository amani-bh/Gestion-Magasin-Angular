import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/ClientService/client.service';

@Component({
  selector: 'app-listeclients',
  templateUrl: './listeclients.component.html',
  styleUrls: [
    '../../../../assets/back/vendors/feather/feather.css',
    '../../../../assets/back/vendors/ti-icons/css/themify-icons.css',
    '../../../../assets/back/vendors/css/vendor.bundle.base.css',
    '../../../../assets/back/css/vertical-layout-light/style.css'
  ]
})
export class ListeclientsComponent implements OnInit {
  list:any=[];
  show:boolean=false;
  constructor(private service:ClientService) { }

  ngOnInit(): void {
    this.service.listeClients().subscribe(
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
  }

}
