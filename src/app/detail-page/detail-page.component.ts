import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ProductService } from './../service/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ActivatedRoute, RouterState } from '@angular/router';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {

  constructor(
    protected productService: ProductService,
    protected route: ActivatedRoute) { }

  $product!: Observable<Product>;
  ngOnInit(): void {
    this.$product = this.route.params.pipe(
      map(params => params['id']),
      switchMap(id => this.productService.getProduct(id)));
  }

}
