import { ProductDetailsComponent } from './product-details/product-details.component';
import { AppComponent } from './app.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home/:username', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'image/:id', component: ProductDetailsComponent },
  { path: 'products/:category', component: ProductsComponent },
  { path: 'products', component: ProductsComponent },
  { path :'cart', component : CartComponent},
  {path : 'wishlist' , component : WishlistComponent},
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
