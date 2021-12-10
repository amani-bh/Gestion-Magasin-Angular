import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListeDetailFacturesComponent } from './liste-detail-factures/liste-detail-factures.component';
import { ListeFacturesComponent } from './liste-factures/liste-factures.component';
import { ListeStocksComponent } from './liste-stocks/liste-stocks.component';
import { ListeclientsComponent } from './listeclients/listeclients.component';
import { ListefournisseursComponent } from './listefournisseurs/listefournisseurs.component';
import { ListeproduitsComponent } from './listeproduits/listeproduits.component';


const routes: Routes = [
  {path:"listeFacturesAdmin",component: ListeFacturesComponent},
  {path:"listeclientsadmin",component: ListeclientsComponent},
  {path:"listeproduitsAdmin",component: ListeproduitsComponent},
  {path:"listefournisseur",component: ListefournisseursComponent},
  {path:"dashboard",component: DashboardComponent},
  {path:"listeDetailFactures",component: ListeDetailFacturesComponent},
  { path: "listeStocks", component: ListeStocksComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLayoutRoutingModule { }
