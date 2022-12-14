import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenuInfBarComponent } from './components/menu-inf-bar/menu-inf-bar.component';
import { MenuSupBarComponent } from './components/menu-sup-bar/menu-sup-bar.component';
import { SaleComponent } from './sale/sale.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { CartComponent } from './cart/cart.component';
import { ItemcardComponent } from './components/itemcard/itemcard.component';
import { RegisterComponent } from './register/register.component';
import { AcercadeComponent } from './acercade/acercade.component';
import { SearchresultComponent } from './searchresult/searchresult.component';
import { CardfoundComponent } from './components/cardfound/cardfound.component';
import { ContactComponent } from './contact/contact.component';
import { ContactSendedComponent } from './contact-sended/contact-sended.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MenuInfBarComponent,
    MenuSupBarComponent,
    SaleComponent,
    CartComponent,
    ItemcardComponent,
    RegisterComponent,
    AcercadeComponent,
    SearchresultComponent,
    CardfoundComponent,
    ContactComponent,
    ContactSendedComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgImageSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

