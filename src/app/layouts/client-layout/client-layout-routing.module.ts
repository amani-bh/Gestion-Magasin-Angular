import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPanierComponent } from './detail-panier/detail-panier.component';
import { DetailProduitComponent } from './detail-produit/detail-produit.component';
import { HomeComponent } from './home/home.component';
import { ListeFacturesComponent } from './liste-factures/liste-factures.component';

const routes: Routes = [
  {path:'listeFactures', component:ListeFacturesComponent},
  {path:'Home', component:HomeComponent},
  {path:'DetailProduit', component:DetailProduitComponent},
  {path:'DetailPanier', component:DetailPanierComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientLayoutRoutingModule { }
