import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLayoutRoutingModule } from './admin-layout-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListeFacturesComponent } from './liste-factures/liste-factures.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ListeFacturesComponent,
    SidebarComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    AdminLayoutRoutingModule
  ]
})
export class AdminLayoutModule { }
