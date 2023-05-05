import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './About/About.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ElectronicsComponent } from './Electronics/Electronics.component';
import { HomeComponent } from './Home/Home.component';
import { LoginComponent } from './Login/Login.component';
// import { ProductComponent } from './Product/Product.component';
import { Product1Component } from './Product1/product1.component';
import { RegisterComponent } from './Register/Register.component';
import { ServiceComponent } from './Service/Service.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { FurnituresComponent } from './Furnitures/Furnitures.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'Product1',
    component:Product1Component
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'service',
    component:ServiceComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'electronics',
    component:ElectronicsComponent
  },
  {
    path:'kitchen',
    component:KitchenComponent
  },
  {
    path:'furniture',
    component:FurnituresComponent
  },
  {
    path:'Product1',
    component:Product1Component,
     children:[
      {
        path:'electronics',
        component:ElectronicsComponent
        },
        {
          path:'kitchen',
          component:KitchenComponent
        },
        {
          path:'furniture',
          component:FurnituresComponent
        }
    ]
  },

  {
    path:'contact',
    component:ContactusComponent
  },
  {
    path:'**',
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
