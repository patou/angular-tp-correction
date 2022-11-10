import { OrderConfirm } from './../command';
import { map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Product } from '../product';
import { Command } from '../command';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  basket = new BehaviorSubject<Product[]>([]);
  constructor(protected http: HttpClient) {
    this.loadBasket();
  }

  loadBasket() {
    this.http.get<Product[]>('http://localhost:8080/rest/basket')
    .subscribe(basket => this.basket.next(basket));
  }

  addToBasket(product: Product) {
    this.http.post('http://localhost:8080/rest/basket', product).subscribe(() => {
      this.loadBasket();
    });
  }

  getBasket() : Observable<Product[]> {
    return this.basket.asObservable();
  }

  getTotal() : Observable<number> {
    return this.basket.pipe(
      map(list => list.reduce((acc, product) => acc + product.price, 0))
      );
  }

  hasProducts() {
    return this.basket.getValue().length > 0;
  }

  sendCommand(command: Command): Observable<OrderConfirm> {
    return this.http.post<OrderConfirm>('http://localhost:8080/rest/basket/confirm', command).pipe(tap(() => {
      this.basket.next([]);
    }));
  }
}
