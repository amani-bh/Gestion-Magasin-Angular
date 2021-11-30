import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListeFacturesComponent } from './liste-factures/liste-factures.component';
import { ListeclientsComponent } from './listeclients/listeclients.component';

const routes: Routes = [
  {path:"listeFacturesAdmin",component: ListeFacturesComponent},
  {path:"listeclientsadmin",component: ListeclientsComponent},
  {path:"dashboard",component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLayoutRoutingModule { }
