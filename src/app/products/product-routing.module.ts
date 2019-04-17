import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailGuard } from './components/product-detail/product-detail.guard';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

const productRoutes: Routes = [
  { path: 'products', component: ProductListComponent },
  {
    path: 'products/:id',
    canActivate: [ProductDetailGuard],
    component: ProductDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(productRoutes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {}
