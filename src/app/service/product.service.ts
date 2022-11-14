import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private httpClient: HttpClient) { }

  getProducts() : Observable<Product[]> {
    return this.httpClient.get<Product[]>('http://localhost:8080/rest/products');
  }

  getProduct(id: string) : Observable<Product> {
    return this.httpClient.get<Product>('http://localhost:8080/rest/products/' + id);
  }

  decreaseStock(product: Product) {
    product.stock--;
  }

  isLastProduct(product: Product) {
    return product.stock === 1;
  }

  isProductAvailable(product: Product) {
    return product.stock > 0;
  }
}
