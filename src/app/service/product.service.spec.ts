import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('product is last', () => {
    service.decreaseStock(service.getProduct(0));
    expect(service.isLastProduct(service.getProduct(0))).toBeTruthy();
  });
});
