import { ProductDetailsComponent } from './product-details/product-details.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'home/:username', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'image/:id', component: ProductDetailsComponent },
  { path: 'products/:category', component: ProductsComponent },
  { path: 'products', component: ProductsComponent },
  { path: '', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
