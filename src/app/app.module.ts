import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Login/Login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './Home/Home.component';
// import { ProductComponent } from './Product/Product.component';
import { ProductdetailedComponent } from './productdetailed/productdetailed.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from'@angular/common/http';
import { Product1Component } from './Product1/product1.component';
import { RegisterComponent } from './Register/Register.component';
import { AboutComponent } from './About/About.component';
import { ServiceComponent } from './Service/Service.component';
import { ElectronicsComponent } from './Electronics/Electronics.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { FurnituresComponent } from './Furnitures/Furnitures.component';
import { GridComponent } from './Grid/Grid.component';

@NgModule({
  declarations: [
    AppComponent,
      LoginComponent,
      ContactusComponent,
      HomeComponent,
      ProductdetailedComponent,
      // ProductComponent,
      Product1Component,
      RegisterComponent,
      AboutComponent,
      ServiceComponent,
      ElectronicsComponent,
      KitchenComponent,
      FurnituresComponent,
      GridComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
