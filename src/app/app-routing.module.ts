import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'auth',loadChildren: ()=>import('./layouts/auth-layout/auth-layout.module').then(m=>m.AuthLayoutModule)},
  {path:'client',loadChildren: ()=>import('./layouts/client-layout/client-layout.module').then(m=>m.ClientLayoutModule)},
  {path:'admin',loadChildren: ()=>import('./layouts/admin-layout/admin-layout.module').then(m=>m.AdminLayoutModule)},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
