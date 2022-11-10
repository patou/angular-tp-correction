import { Component } from '@angular/core';
import { Product } from './product';
import { BasketService } from './service/basket.service';
import { ProductService } from './service/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    protected productService: ProductService,
    protected basketService: BasketService,
    ) {

  }

  get products() {
    return this.productService.getProducts();
  }

  get total() {
    return this.basketService.getTotal();
  }

  updatePrice(product: Product) {
    this.productService.decreaseStock(product);
    this.basketService.addToBasket(product);
  }
}
