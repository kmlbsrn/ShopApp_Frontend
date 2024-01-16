import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../User/User';
import { UserDetail } from '../User/UserDetail';
import { Category } from '../Category/Category';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from '../Product/Product';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl: string = 'https://localhost:7169/api';
  constructor(private http: HttpClient,private fb:FormBuilder) {}


  //-------------------------------CATEGORY----------------------------------
  getCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}/Category`);
  }

  addCategory(formData: FormGroup): Observable<any> {
    console.log(formData.value);
    return this.http.post(`${this.apiUrl}/Category/`, formData.value);
  }

  updateProduct(formData: FormGroup): Observable<any> {
    console.log(formData.value);
    return this.http.post(`${this.apiUrl}/Product/Update/`, formData.value);
  }
  //-------------------------------PRODUCT-----------------------------------

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/Product`);
  }

  getProductById(id: number): Observable<Product>{
    return this.http.get<Product>(`${this.apiUrl}/Product/id?id=${id}`);
  }

  addProduct(formData: FormGroup): Observable<any> {
    console.log(formData.value);
    return this.http.post(`${this.apiUrl}/Product/Add/`,formData.value);
  }

  deleteProduct(id: number): Observable<Product>{
    console.log("softDelete çalıştı");
    return this.http.get<Product>(`${this.apiUrl}/Product/Delete?id=${id}`);
  }
  //-------------------------------USER--------------------------------------

  addUser(formData: FormGroup): Observable<any> {
    return this.http.post(`${this.apiUrl}/User/`, formData.value);
  }

  updateUser(formData:FormGroup): Observable<any> {
    return this.http.post(`${this.apiUrl}/User/Update/`, formData.value);
  }


  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/User/getallusers`);
  }

  getUserDetail(id: number): Observable<UserDetail> {
    return this.http.get<UserDetail>(`${this.apiUrl}/User/GetUserById?id=${id}`);
  }

  deleteUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/User/Delete?id=${id}`);
  }



}
