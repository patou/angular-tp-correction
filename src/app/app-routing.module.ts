import { BasketGuardGuard } from './basket-guard.guard';
import { BasketPageComponent } from './basket-page/basket-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', component: ProductPageComponent },
  { path: 'basket', component: BasketPageComponent, canActivate: [BasketGuardGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
