import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: [ 
  '../../../../assets/back/vendors/feather/feather.css',
  '../../../../assets/back/vendors/ti-icons/css/themify-icons.css',
  '../../../../assets/back/vendors/css/vendor.bundle.base.css',
  '../../../../assets/back/vendors/datatables.net-bs4/dataTables.bootstrap4.css',
  '../../../../assets/back/vendors/ti-icons/css/themify-icons.css',
  '../../../../assets/back/js/select.dataTables.min.css',
  '../../../../assets/back/css/vertical-layout-light/style.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
