  import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/cart.service';
import { CartItem } from 'src/app/models/cartItem';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent implements OnInit, OnDestroy{
  sum : number = 0
  private cartSubscription: Subscription = new Subscription;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {

    this.cartSubscription =this.cartService.cartItemsChanged
    .subscribe((cartItems: CartItem[]) => {
      this.sum = this.cartService.sumItems();
    })
  }

  ngOnDestroy(): void {
    this.cartSubscription.unsubscribe();
  }




}