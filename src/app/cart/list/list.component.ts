import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/cart.service';
import { CartItem } from 'src/app/models/cartItem';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'cart-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy{
  cartItems: CartItem[] = [];
  private cartSubscription: Subscription = new Subscription;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();

    this.cartSubscription =this.cartService.cartItemsChanged
    .subscribe((cartItems: CartItem[]) => {
      this.cartItems = cartItems;
    })
  }
  
  ngOnDestroy(): void {
    this.cartSubscription.unsubscribe();
  }

  increment(cartItem: CartItem) {
    console.log("up")
    this.cartService.increment(cartItem.item)
  }
  
  decrement(cartItem: CartItem) {
    console.log("down")
    this.cartService.decrement(cartItem.item)
  }

}
