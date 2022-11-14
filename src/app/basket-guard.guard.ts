import { map } from 'rxjs/operators';
import { BasketService } from './service/basket.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasketGuardGuard implements CanActivate {
  constructor(private basketService :BasketService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.basketService.getBasket().pipe(map(basket => basket.length > 0));
  }
  
}
