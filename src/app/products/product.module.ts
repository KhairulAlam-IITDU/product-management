import { NgModule } from '@angular/core';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ProductListComponent, ProductDetailComponent],
  imports: [ProductRoutingModule, SharedModule]
})
export class ProductModule {}
