import { Component, OnInit } from '@angular/core';
import { PanierService } from 'src/app/services/PanierService/panier.service';

@Component({
  selector: 'app-detail-panier',
  templateUrl: './detail-panier.component.html',
  styleUrls: ['./detail-panier.component.css']
})
export class DetailPanierComponent implements OnInit {
panier:any;
  constructor(private service:PanierService) { }

  ngOnInit(): void {
    this.service.getPanier(1).subscribe(
      (d) => {
        if (d == null) {
          console.log("panier vide")
        }
        else {
          this.panier = d;
        }

      }

    );
  }

}
