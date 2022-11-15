import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BasketService } from './../service/basket.service';
import { Component, OnInit, Inject } from '@angular/core';
import { Product } from '../product';
import { Command, OrderConfirm } from './../command';

@Component({
  selector: 'app-basket-page',
  templateUrl: './basket-page.component.html',
  styleUrls: ['./basket-page.component.css']
})
export class BasketPageComponent implements OnInit {
  $basket!: Observable<Product[]>;
  command!: Command;
  constructor(protected basketService: BasketService, protected router: Router, protected dialog: MatDialog) { }

  ngOnInit(): void {
    this.$basket = this.basketService.getBasket();
    this.command = {};
  }

  onSubmit() {
    this.basketService.sendCommand(this.command).subscribe((orderConfirm) => {
      this.openDialog(orderConfirm)
    });
  }

  openDialog(orderConfirm: OrderConfirm): void {
    const dialogRef = this.dialog.open(ConfirmOrderDialog, {
      width: '250px',
      data: orderConfirm,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['/']);
      this.command = {};
    });
  }

}

@Component({
  selector: 'confirm-order-dialog',
  templateUrl: 'confirm-order-dialog.html',
})
export class ConfirmOrderDialog {
  constructor(
    @Inject(MAT_DIALOG_DATA) protected data: OrderConfirm,
    protected dialogRef: MatDialogRef<ConfirmOrderDialog>
  ) {}
}
