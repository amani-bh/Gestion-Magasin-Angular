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
  clt:any=[];
  show:boolean=false;
  show1:boolean=false;
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
  showForm1(i:any){
    this.show1=!this.show1;
    this.clt=this.list[i];
    console.log(this.clt);
    
  }
  ajouter(f:any){
    this.show=!this.show;
    console.log(f);
    this.service.addClient(f).subscribe(
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
  modifier(d:any){
    this.show1=!this.show1;
    console.log(d);
    this.service.updateClient(d).subscribe(
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
   
    this.service.deleteClient(this.list[i].idClient).subscribe(
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

}}
