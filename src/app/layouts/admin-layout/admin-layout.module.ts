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
import { ListeStocksComponent } from './liste-stocks/liste-stocks.component';
import { UpdateStockComponent } from './update-stock/update-stock.component';
import { ListeproduitsComponent } from './listeproduits/listeproduits.component';
import { UpdateProduitComponent } from './update-produit/update-produit.component';
import { DetailOfOneFactureComponent } from './detail-of-one-facture/detail-of-one-facture.component';
import { UpdateDetailFactureComponent } from './update-detail-facture/update-detail-facture.component';
import { AddDetailFactureComponent } from './add-detail-facture/add-detail-facture.component';
import { AddClientComponent } from './add-client/add-client.component';
import { AddFournisseurComponent } from './add-fournisseur/add-fournisseur.component';
import { UpdateFournisseurComponent } from './update-fournisseur/update-fournisseur.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ListeFacturesComponent,
    SidebarComponent,
    NavbarComponent,
    ListeclientsComponent,
    ListeDetailFacturesComponent,
    ListefournisseursComponent,
    ListeStocksComponent,
    UpdateStockComponent,
    ListeproduitsComponent,
    UpdateProduitComponent,
    DetailOfOneFactureComponent,
    UpdateDetailFactureComponent,
    AddDetailFactureComponent,
    AddClientComponent,
    AddFournisseurComponent,
    UpdateFournisseurComponent
 

  ],
  imports: [
    CommonModule,
    AdminLayoutRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminLayoutModule { }
