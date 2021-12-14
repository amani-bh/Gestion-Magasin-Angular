import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ClientService } from 'src/app/services/ClientService/client.service';


@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: [
    '../../../../assets/back/vendors/feather/feather.css',
    '../../../../assets/back/vendors/ti-icons/css/themify-icons.css',
    '../../../../assets/back/vendors/css/vendor.bundle.base.css',
    '../../../../assets/back/css/vertical-layout-light/style.css'
  ]
})
export class AddClientComponent implements OnInit {
  @Output() notif=new EventEmitter<any>();
  @Input() Client:any;
  constructor(private service:ClientService) { }


  ngOnInit(): void {
  }
  ajouter(f:any){
    console.log(f);
    this.service.addClient(f).subscribe(
      (d)=>{
        //console.log('good');
        // this.ngOnInit()
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
