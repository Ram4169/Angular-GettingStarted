import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list.component';
import { ProductDetailGuard } from './product-detail.guard';
import { ProductDetailsComponent } from './product-details.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: 'products', component: ProductListComponent},
      {path: 'products/:id', canActivate: [ProductDetailGuard], component: ProductDetailsComponent}
    ])
  ],
  declarations: [
  ],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
