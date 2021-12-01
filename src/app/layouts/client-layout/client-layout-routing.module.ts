import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListeFacturesComponent } from './liste-factures/liste-factures.component';

const routes: Routes = [
  {path:'listeFactures', component:ListeFacturesComponent},
  {path:'Home', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientLayoutRoutingModule { }
