import { Observable } from 'rxjs';
import { BasketService } from './../service/basket.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-basket-page',
  templateUrl: './basket-page.component.html',
  styleUrls: ['./basket-page.component.css']
})
export class BasketPageComponent implements OnInit {
  $basket!: Observable<Product[]>;
  constructor(protected basketService: BasketService) { }

  ngOnInit(): void {
    this.$basket = this.basketService.getBasket();
  }

}
