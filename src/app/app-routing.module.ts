import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './User/User.component';
import { CategoryComponent } from './Category/Category.component';
import { ProductComponent } from './Product/Product.component';
import { ProductListComponent } from './Product/ProductList/ProductList.component';

const routes: Routes = [
  {
    path: 'user', component: UserComponent,
  },
  { path: 'category', component: CategoryComponent },
  {
    path: 'product', component: ProductComponent,
    children: [
      { path: 'list', component: ProductListComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
