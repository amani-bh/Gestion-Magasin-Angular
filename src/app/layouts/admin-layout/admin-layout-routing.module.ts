import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListeDetailFacturesComponent } from './liste-detail-factures/liste-detail-factures.component';
import { ListeFacturesComponent } from './liste-factures/liste-factures.component';
import { ListeStocksComponent } from './liste-stocks/liste-stocks.component';

const routes: Routes = [
  { path: "listeFacturesAdmin", component: ListeFacturesComponent },
  { path: "listeStocks", component: ListeStocksComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "listeDetailFactures", component: ListeDetailFacturesComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLayoutRoutingModule { }
