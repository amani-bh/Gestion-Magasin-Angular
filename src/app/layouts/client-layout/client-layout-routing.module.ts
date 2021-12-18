import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPanierComponent } from './detail-panier/detail-panier.component';
import { DetailProduitComponent } from './detail-produit/detail-produit.component';
import { FactureComponent } from './facture/facture.component';
import { HomeComponent } from './home/home.component';
import { ListDetailFacturesComponent } from './list-detail-factures/list-detail-factures.component';
import { ListeFacturesComponent } from './liste-factures/liste-factures.component';
import { ListProduitComponent } from './list-produit/list-produit.component';


const routes: Routes = [
  {path:'listeFactures', component:ListeFacturesComponent},
  {path:'Home', component:HomeComponent},
  {path:'DetailProduit', component:DetailProduitComponent},
  {path:'DetailPanier', component:DetailPanierComponent},
  {path:'Facture', component:FactureComponent},
  {path:'listProduit/:cat', component:ListProduitComponent},
  {path:'listeDetailFacture/:id', component:ListDetailFacturesComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientLayoutRoutingModule { }
