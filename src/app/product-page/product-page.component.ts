import { BasketService } from './../service/basket.service';
import { ProductService } from './../service/product.service';
import { Product } from './../product';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  $products!: Observable<Product[]>;
  $total!: Observable<number>;

  constructor(
    protected productService: ProductService,
    protected basketService: BasketService,
    ) {}

  ngOnInit(): void {
    this.$products = this.productService.getProducts();
    this.$total = this.basketService.getTotal();
  }

  updatePrice(product: Product) {
    this.productService.decreaseStock(product);
    this.basketService.addToBasket(product);
  }

}
