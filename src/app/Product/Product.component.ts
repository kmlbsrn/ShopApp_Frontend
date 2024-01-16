import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Product } from './Product';
import { FormBuilder, Validators } from '@angular/forms';
import { Category } from '../Category/Category';

@Component({
  selector: 'app-Product',
  templateUrl: './Product.component.html',
  styleUrls: ['./Product.component.css'],
})
export class ProductComponent implements OnInit {
  constructor(private apiService: ApiService, private fb: FormBuilder) { }

  products: Product[] = [];
  categories: Category[] = [];


  Isview: boolean = false;





  ngOnInit() {
  }






}
