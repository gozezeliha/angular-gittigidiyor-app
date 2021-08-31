import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { AppComponent } from './app.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductComponent } from './product/product.component';
import { BasketComponent } from './basket/basket.component';

const routes: Routes = [
  {
  path:'products',
  component : ProductComponent
  },
  {
    path: '', 
    redirectTo : 'products',
    pathMatch:'full'
  },
  {
  path:'products/category/:categoryId',
  component:ProductComponent
  },
  {
  path:'productDetail/:productId',
  component : ProductDetailsComponent
  },
  {
  path:'basket',
  component : BasketComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
