import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailFactureService } from 'src/app/services/DetailFactureService/detail-facture.service';

@Component({
  selector: 'app-list-detail-factures',
  templateUrl: './list-detail-factures.component.html',
  styleUrls: ['./list-detail-factures.component.css']
})
export class ListDetailFacturesComponent implements OnInit {
list:any=[];
  constructor(private service:DetailFactureService,private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.service.listeDfByIdFacture(this.activatedroute.snapshot.params['id']).subscribe(
      (d)=>{
        this.list=d;
      }
    )
  }

}
