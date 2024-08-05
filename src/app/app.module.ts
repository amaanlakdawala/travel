import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeCardComponent } from './home-card/home-card.component';
import { WorksComponent } from './works/works.component';
import { HomebannerComponent } from './homebanner/homebanner.component';
import { HttpClient, HttpClientModule,provideHttpClient } from '@angular/common/http';
import { withFetch } from '@angular/common/http';
import { HoteldescriptionComponent } from './hoteldescription/hoteldescription.component';
import { TestComponent } from './test/test.component';
import { BookingComponent } from './booking/booking.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    PagenotfoundComponent,
    AboutComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
    HomeCardComponent,
    WorksComponent,
    HomebannerComponent,
    HoteldescriptionComponent,
    TestComponent,
    BookingComponent,
    ProfileComponent,
    SearchComponent,
    UpdateProfileComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
