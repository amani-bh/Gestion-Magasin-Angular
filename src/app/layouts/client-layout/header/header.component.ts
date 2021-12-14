import { Component, OnInit } from '@angular/core';
import { PanierService } from 'src/app/services/PanierService/panier.service';
import { RayonService } from 'src/app/services/RayonService/rayon.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  list: any = [];
  listRayon : any =[];
  constructor(private service: PanierService, private serviceRayon :RayonService) { }

  ngOnInit(): void {
    this.serviceRayon.listeRayons().subscribe(
      (d)=>this.listRayon=d
    )

    this.service.getPanier(1).subscribe(
      (d) => {
        if (d == null) {
          this.service.addPanier(1).subscribe();
        }
        else {
          this.list = d;
          console.log(this.list)
        }

      }

    );
  }
  remove(idPa: any, idPr: any) {
    this.service.removePanier(idPa, idPr).subscribe(
      ()=>{
        this.ngOnInit();
      }
    );
  }
}
