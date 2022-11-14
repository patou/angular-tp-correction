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
}
