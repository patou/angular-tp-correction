import { Observable } from 'rxjs';
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
  $products: Observable<Product[]>;
  // products: Product[];
  $total: Observable<number>;

  constructor(
    protected productService: ProductService,
    protected basketService: BasketService,
    ) {
      this.$products = this.productService.getProducts();
      // this.productService.getProducts().subscribe(products => this.products = products);
      this.$total = this.basketService.getTotal();
  }

  updatePrice(product: Product) {
    this.productService.decreaseStock(product);
    this.basketService.addToBasket(product);
  }
}
