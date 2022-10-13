import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercadeComponent } from './acercade/acercade.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SaleComponent } from './sale/sale.component';
import { SearchresultComponent } from './searchresult/searchresult.component';
CartComponent
const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'sale',
    component: SaleComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'acercade',
    component: AcercadeComponent
  },
  {
    path: 'result/:name',
    component: SearchresultComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
