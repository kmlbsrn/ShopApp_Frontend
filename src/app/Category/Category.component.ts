import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Category } from './Category';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-Category',
  templateUrl: './Category.component.html',
  styleUrls: ['./Category.component.css'],
})
export class CategoryComponent implements OnInit {
  categories: Category[] = [];


  constructor(
    private apiService: ApiService,
    private formBuilder: FormBuilder
  ) { }


  categoryForm = this.formBuilder.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
  });

  ngOnInit() {
    this.getCategory();
  }

  getCategory() {
    return this.apiService.getCategory().subscribe((data) => {
      console.log(data);
      this.categories = data;
    });
  }

  onSubmit(): void {
    console.log(this.categoryForm.value);

    this.apiService.addCategory(this.categoryForm).subscribe((data) => {
      console.log(data);
      this.getCategory();
    });
  }
}
