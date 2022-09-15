import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { SeedsComponent} from './seeds/seeds.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  { path:'About',component:AboutComponent},
  { path:'cart',component:CartComponent},
  {path:'login',component:LoginComponent},
  { path:'seed',component:SeedsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
