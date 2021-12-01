import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './layouts/admin-layout/dashboard/dashboard.component';
import { LoginComponent } from './layouts/auth-layout/login/login.component';
import { HomeComponent } from './layouts/client-layout/home/home.component';
import { ListeFacturesComponent } from './layouts/client-layout/liste-factures/liste-factures.component';

const routes: Routes = [
  //Auth
  {
    path:'',
    component: LoginComponent,
    children:[
      {
        path:"",
        redirectTo:"/auth",
        pathMatch:"full"
      },
      {
        path:'auth',
        loadChildren: ()=>import('./layouts/auth-layout/auth-layout.module').then(m=>m.AuthLayoutModule)

      }
    ]
  },
 // client
{
  path:'',
  component: HomeComponent,
  children:[
    {
      path:"",
      redirectTo:"/client",
      pathMatch:"full"
    },
    {
      path:'client',
      loadChildren: ()=>import('./layouts/client-layout/client-layout.module').then(m=>m.ClientLayoutModule)

    }
  ]
},
 //Admin
{
  path:'',
  component: DashboardComponent,
  children:[
    {
      path:"",
      redirectTo:"/admin",
      pathMatch:"full"
    },
    {
      path:'admin',
      loadChildren: ()=>import('./layouts/admin-layout/admin-layout.module').then(m=>m.AdminLayoutModule)

    }
  ]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
