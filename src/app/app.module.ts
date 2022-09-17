import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { SeedsComponent } from './seeds/seeds.component';
import { SeedsdealsComponent } from './seeds/seedsdeals/seedsdeals.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { AdvertiseComponent } from './advertise/advertise.component';
import { CounterComponent } from './counter/counter.component';
import { CounterchildComponent } from './counter/counterchild/counterchild.component';
import { MedplantsComponent } from './medplants/medplants.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    SearchComponent,
    CartComponent,
    LoginComponent,
    SeedsComponent,
    SeedsdealsComponent,
    AllproductsComponent,
    AdvertiseComponent,
    CounterComponent,
    CounterchildComponent,
    MedplantsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
