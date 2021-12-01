import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientLayoutRoutingModule } from './client-layout-routing.module';
import { ListeFacturesComponent } from './liste-factures/liste-factures.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    ListeFacturesComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ClientLayoutRoutingModule
  ]
})
export class ClientLayoutModule { }
