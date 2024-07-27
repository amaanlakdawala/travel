import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AuthGuard } from './guard/auth.guard';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

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
    path:"about",
    component:AboutComponent,
    title:"About"
  },
  {
    path:"contact",
    component:ContactComponent,
    title:"Contact"
  },
  {
    path:"navbar",
    component:NavbarComponent,
    title:"Navbar",
    
  },
  {
    path:"footer",
    component:FooterComponent,
    title:"Footer"
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
