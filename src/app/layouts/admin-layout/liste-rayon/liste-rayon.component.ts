import { Component, Input, OnInit } from '@angular/core';
import { RayonService } from 'src/app/services/RayonService/rayon.service';

@Component({
  selector: 'app-liste-rayon',
  templateUrl: './liste-rayon.component.html',
  styleUrls: [
    '../../../../assets/back/vendors/feather/feather.css',
    '../../../../assets/back/vendors/ti-icons/css/themify-icons.css',
    '../../../../assets/back/vendors/css/vendor.bundle.base.css',
    '../../../../assets/back/css/vertical-layout-light/style.css'
  ]
})
export class ListeRayonComponent implements OnInit {
  @Input() idR !: any;
  list: any = [];
  showAR: boolean = false;
  show: boolean = false;
  rayon: any;
  constructor(private service: RayonService) { }

  ngOnInit(): void {
    this.service.listeRayons().subscribe(
      (d) => {
        this.list = d;
      }
    );
    console.log(this.list);
  }
  showFormAddR() {
    this.showAR = !this.showAR;
  }
  showUpdateForm(dp: any) {
    this.show = !this.show;
    this.rayon = dp;
  }

  afterRecieveData(i: any) {
    this.list.push(i);
  }
  afterRecieveDataUp(i: any) {
    this.ngOnInit();
  }

  deleteRayon(id: any) {
    console.log(id);
    this.service.deleteRayon(id).subscribe(
      () =>
        this.ngOnInit()
    );
  }

}