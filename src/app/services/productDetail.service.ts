import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductDetailService {
  constructor(private httpClient: HttpClient) {}

  getProductDetailByProductId(productId: any): Observable<any> {
    return this.httpClient.get(
      'http://localhost:3000/productDetails?productId='+productId);
  }
 
}
