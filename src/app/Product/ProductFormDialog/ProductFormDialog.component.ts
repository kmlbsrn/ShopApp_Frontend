import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from '../Product';
import { ApiService } from 'src/app/services/api.service';
import { Category } from 'src/app/Category/Category';

@Component({
  selector: 'app-ProductFormDialog',
  templateUrl: './ProductFormDialog.component.html',
  styleUrls: ['./ProductFormDialog.component.css'],
})
export class ProductFormDialogComponent implements OnInit {
  categories: Category[] = [];
  productData: Product[] = [];
  title!: string;

  constructor(
    private dialogRef: MatDialogRef<ProductFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private apiService: ApiService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getCategory();

    this.title = this.data.title;
    if (this.data.id != 0) {
      this.getProductData(this.data.id);
    }
  }

  productForm = this.fb.group({
    name: this.fb.control(''),
    unitInStock: this.fb.control(''),
    unitPrice: this.fb.control(''),
    categoryId: this.fb.control(''),
  });

  onSubmit(): void {
    if (this.productForm.valid) {
      console.log(this.productForm.value);
      console.log(this.data.id);

      if (this.data.id === 0) {
        this.apiService.addProduct(this.productForm).subscribe((data) => {
          console.log('API Response:', data);
          this.closeDialog();
        });
      } else {
        this.apiService.updateProduct(this.productForm).subscribe((data) => {
          console.log('API Response:', data);
          this.closeDialog();
        });
      }
    } else {
      console.log('Form is not valid. Please fill out all fields.');
      // Optionally, you can display an error message or take other actions
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  getProductData(id: number) {
    this.apiService.getProductById(this.data.id).subscribe((data) => {
      console.log('API Response:', data);

      if (Array.isArray(data) && data.length > 0) {
        const product = data[0];

        console.log('productData:', product);

        // "name" özelliğinin beklenen bir şekilde var olduğunu kontrol et
        if (product.name !== undefined) {
          this.productForm.setValue({
            name: product.name || '',
            unitInStock: product.unitInStock || '',
            unitPrice: product.unitPrice || '',
            categoryId: product.category?.id || '',
          });
        } else {
          console.error('Name property is undefined in the API response.');
        }
      } else {
        console.error('Invalid or empty data received from the API.');
      }
    });
  }

  getCategory() {
    return this.apiService.getCategory().subscribe((data) => {
      this.categories = data;
      console.log('categories:', this.categories);
    });
  }
}
