import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/products');
  }

  getProductsByCategoryId(categoryId:any) : Observable<any>
  {
      return this.httpClient.get('http://localhost:3000/products?categoryId='+categoryId)
  }



}

