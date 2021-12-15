import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FactureService } from 'src/app/services/FactureService/facture.service';
import { TokenStorageService } from 'src/app/services/JwtClient/token-storage.service';

@Component({
  selector: 'app-liste-factures',
  templateUrl: './liste-factures.component.html',
  styleUrls: ['./liste-factures.component.css']
})
export class ListeFacturesComponent implements OnInit {
list:any=[];
  constructor(private service:FactureService,private route:Router,private  user:TokenStorageService) { }

  ngOnInit(): void {
    this.service.listFacturesByClient(this.user.getUser()['id']).subscribe(
      (d)=>{
        console.log(d)
        this.list=d;
      }
    )
  }
  pdfReport(id: any) {
    this.service.pdfReport(this.user.getUser()['id']).subscribe(res => {
      var file = new Blob([res], { type: "application/pdf" });
      var fileURL = URL.createObjectURL(file);
      window.open(fileURL);
      console.log("PDF Facture");
    });
  }

}
