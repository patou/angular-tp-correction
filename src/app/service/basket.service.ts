import { Injectable } from '@angular/core';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  basket: Product[] = [];
  constructor() { }

  addToBasket(product: Product) {
    this.basket.push(product);
  }

  getBasket() {
    return this.basket;
  }

  getTotal() {
    return this.basket.reduce((acc, product) => acc + product.price, 0);
  }

  hasProducts() {
    return this.basket.length > 0;
  }
}
