import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeFacturesComponent } from './liste-factures/liste-factures.component';

const routes: Routes = [
  {path:'listeFactures', component:ListeFacturesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientLayoutRoutingModule { }
