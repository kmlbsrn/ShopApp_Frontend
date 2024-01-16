import { Component, Inject, OnChanges, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Product } from '../Product';
import { MatDialog } from '@angular/material/dialog';
import { ProductFormDialogComponent } from '../ProductFormDialog/ProductFormDialog.component';

@Component({
  selector: 'app-ProductList',
  templateUrl: './ProductList.component.html',
  styleUrls: ['./ProductList.component.css'],
})
export class ProductListComponent implements OnInit,OnChanges {
  constructor(private apiService: ApiService, private dialog: MatDialog) {}

  products: Product[] = [];
  ngOnInit() {
    this.getProduct();
  }

  ngOnChanges(){
    this.getProduct();
  }

  getProduct() {
    return this.apiService.getProducts().subscribe((data) => {
      console.log(data);
      this.products = data;
    });
  }

  deleteProduct(id: number) {
    console.log(id);
    this.apiService.deleteProduct(id).subscribe((data) => {
      console.log(data);
      this.getProduct();
    });
  }


  addProduct() {
    this.openDialog(0,'Add Product');
  }

  updateProduct(id: number) {
    this.openDialog(id,'Update Product');
  }


  openDialog(id: number,title:string) {

      const dialogRef = this.dialog.open(ProductFormDialogComponent, {
        width: '600px',
        height: '600px',
        data:{id:id,title:title},
      });

      dialogRef.afterClosed().subscribe(() => {
        console.log('The dialog was closed');
        this.getProduct();
      });

  }
}
