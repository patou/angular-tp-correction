import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(protected productService: ProductService) { }

  @Input() product!: Product;
  @Output() addTobasket = new EventEmitter<Product>();

  ngOnInit(): void {
  }

}
