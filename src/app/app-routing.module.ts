import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    title:'Home',
    // canActivate:[AuthGuard]
  },
  {
    path:"login",
    component:LoginComponent,
    title:"Login",
    
  },
  {
    path:"register",
    component:RegisterComponent,
    title:'Register',
    canActivate:[AuthGuard]
  },
  {
    path:'**',
    component:PagenotfoundComponent,
    title:'PageNotFound'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
