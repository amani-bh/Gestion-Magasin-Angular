import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/ClientService/client.service';

@Component({
  selector: 'app-listeclients',
  templateUrl: './listeclients.component.html',
  styleUrls: ['./listeclients.component.css']
})
export class ListeclientsComponent implements OnInit {
  list:any=[];
  constructor(private service:ClientService) { }

  ngOnInit(): void {
    this.service.listeClients().subscribe(
      (d) => {
        this.list=d;
      }
      );
  }

}
