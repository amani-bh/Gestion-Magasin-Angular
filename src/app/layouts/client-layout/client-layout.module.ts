import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientLayoutRoutingModule } from './client-layout-routing.module';
import { ListeFacturesComponent } from './liste-factures/liste-factures.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { DetailProduitComponent } from './detail-produit/detail-produit.component';
import { DetailPanierComponent } from './detail-panier/detail-panier.component';
import { FactureComponent } from './facture/facture.component';
import { ListProduitComponent } from './list-produit/list-produit.component';



@NgModule({
  declarations: [
    ListeFacturesComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DetailProduitComponent,
    DetailPanierComponent,
    FactureComponent,
    ListProduitComponent,

  ],
  imports: [
    CommonModule,
    ClientLayoutRoutingModule
  ]
})
export class ClientLayoutModule { }
