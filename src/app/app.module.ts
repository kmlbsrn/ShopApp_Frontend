import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailComponent } from './User/Detail/Detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserComponent } from './User/User.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoryComponent } from './Category/Category.component';
import { ProductComponent } from './Product/Product.component';
import { ProductListComponent } from './Product/ProductList/ProductList.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { ProductFormDialogComponent } from './Product/ProductFormDialog/ProductFormDialog.component';
import { UserFormDialogComponent } from './User/UserFormDialog/UserFormDialog.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    NavbarComponent,
    UserComponent,
    CategoryComponent,
    ProductComponent,
    ProductListComponent,
    ProductFormDialogComponent,
    UserFormDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
