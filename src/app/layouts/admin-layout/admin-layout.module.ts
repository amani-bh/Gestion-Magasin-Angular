import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLayoutRoutingModule } from './admin-layout-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListeFacturesComponent } from './liste-factures/liste-factures.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListeclientsComponent } from './listeclients/listeclients.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListeDetailFacturesComponent } from './liste-detail-factures/liste-detail-factures.component';
import { ListefournisseursComponent } from './listefournisseurs/listefournisseurs.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ListeFacturesComponent,
    SidebarComponent,
    NavbarComponent,
    ListeclientsComponent,
    ListeDetailFacturesComponent,
    ListefournisseursComponent,

  ],
  imports: [
    CommonModule,
    AdminLayoutRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminLayoutModule { }
